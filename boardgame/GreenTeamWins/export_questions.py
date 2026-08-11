"""把可编辑的 questions.csv 导出为页面直接读取的 questions-data.js。"""

import csv
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CSV_PATH = ROOT / "questions.csv"
JS_PATH = ROOT / "questions-data.js"
APP_PATH = ROOT / "app.js"


def existing_hints():
    """从旧版内置题库取回已有填空题提示，避免迁移时丢失。"""
    hints = {}
    pattern = re.compile(r"q: '([^']*)'.*?hint: '([^']*)'")
    for line in APP_PATH.read_text(encoding="utf-8").splitlines():
        match = pattern.search(line)
        if match:
            hints[match.group(1)] = match.group(2)
    return hints


def normalize_rows():
    hint_map = existing_hints()
    with CSV_PATH.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.reader(handle)
        next(reader, None)
        rows = []
        for raw in reader:
            cells = list(raw[:6]) + [""] * max(0, 6 - len(raw))
            question, option_a, option_b, option_c, category, hint = [cell.strip() for cell in cells[:6]]
            options = [value for value in (option_a, option_b, option_c) if value]
            if not question:
                continue
            if not options:
                hint = hint or hint_map.get(question, "写下你第一个想到的答案")
            else:
                hint = ""
            rows.append([question, option_a, option_b, option_c, category or "自定义题目", hint])
    return rows


def export(rows):
    with CSV_PATH.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(["问题", "选项A", "选项B", "选项C", "分类", "提示"])
        writer.writerows(rows)

    question_objects = []
    for question, option_a, option_b, option_c, category, hint in rows:
        options = [value for value in (option_a, option_b, option_c) if value]
        fingerprint = "|".join([question, option_a, option_b, option_c]).encode("utf-8")
        question_objects.append({
            "id": "q-" + hashlib.sha1(fingerprint).hexdigest()[:12],
            "type": "choice3" if len(options) == 3 else "choice2" if len(options) == 2 else "fill",
            "category": category,
            "q": question,
            "options": options,
            "hint": hint,
        })
    payload = "window.QUESTION_BANK = " + json.dumps(question_objects, ensure_ascii=False, indent=2) + ";\n"
    JS_PATH.write_text(payload, encoding="utf-8")
    print(f"已导出 {len(rows)} 道题：{JS_PATH.name}")


if __name__ == "__main__":
    normalized = normalize_rows()
    if not normalized:
        raise SystemExit("题库不能为空")
    keys = [(row[0], row[1], row[2], row[3]) for row in normalized]
    if len(keys) != len(set(keys)):
        raise SystemExit("题库存在重复的题目与选项组合，请先去重")
    export(normalized)
