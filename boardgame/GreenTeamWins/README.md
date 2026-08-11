# 多数派题库

博客地址：`/boardgame/GreenTeamWins/`

网页是纯静态页面，打开即可使用。源文件在 `source/boardgame/GreenTeamWins/`。

## 添加题目

编辑 `questions.csv`，列顺序固定为：

`问题 | 选项A | 选项B | 选项C | 分类 | 提示`

- 二选一：填写 A、B，C 留空。
- 三选一：填写 A、B、C。
- 填空题：A、B、C 都留空，把主持人需要看到的说明写在“提示”列。

编辑完成后，在当前文件夹运行：

```powershell
python export_questions.py
```

脚本会把表格整理成 `questions-data.js`，网页下次打开就会使用最新题库。
