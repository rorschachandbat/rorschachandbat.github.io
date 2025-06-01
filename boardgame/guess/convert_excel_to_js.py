import pandas as pd
import json
import os

def convert_excel_to_js():
    try:
        excel_file = 'trivia_data.xls'
        
        # 检查文件是否存在
        if not os.path.exists(excel_file):
            raise FileNotFoundError(f"找不到文件：{excel_file}")
            
        # 读取Excel文件
        df = pd.read_excel(excel_file, engine='xlrd')
        
        # 验证数据格式
        if df.empty:
            raise ValueError("Excel文件为空")
            
        if 'Question' not in df.columns or 'Answer' not in df.columns:
            raise ValueError("Excel格式不正确，需要包含Question和Answer列")
            
        # 处理Type和Level列，设置默认值
        if 'Type' not in df.columns:
            df['Type'] = '其他'
        if 'Level' not in df.columns:
            df['Level'] = '普通'
            
        # 填充空值
        df['Type'] = df['Type'].fillna('其他')
        df['Level'] = df['Level'].fillna('普通')
        
        # 添加索引列
        df['index'] = range(1, len(df) + 1)
        
        # 转换为JavaScript数组格式
        trivia_data = df.to_dict('records')
        
        # 获取所有唯一的类型和难度
        types = sorted(df['Type'].unique().tolist())
        levels = sorted(df['Level'].unique().tolist())
        
        js_content = f"""// 自动生成的题库数据
const triviaData = {json.dumps(trivia_data, ensure_ascii=False, indent=2)};

// 所有可用的类型和难度
const availableTypes = {json.dumps(types, ensure_ascii=False)};
const availableLevels = {json.dumps(levels, ensure_ascii=False)};
"""
        
        # 写入JavaScript文件
        with open('trivia_data.js', 'w', encoding='utf-8') as f:
            f.write(js_content)
            
        print("转换成功！数据已保存到 trivia_data.js")
        print(f"可用的类型：{', '.join(types)}")
        print(f"可用的难度：{', '.join(levels)}")
        print(f"总题目数：{len(df)}")
        
    except Exception as e:
        print(f"转换失败：{str(e)}")
        print("\n请确保：")
        print("1. Excel文件格式正确（.xls）")
        print("2. 文件包含 Question 和 Answer 列")
        print("3. Type 和 Level 列可以为空（将使用默认值）")
        print("4. 已安装所需的Python包：")
        print("   pip install pandas xlrd")

if __name__ == "__main__":
    convert_excel_to_js() 