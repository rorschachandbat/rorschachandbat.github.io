import pandas as pd
import json
import os

def convert_excel_to_js():
    try:
        excel_file = 'trivia_data_auto.xlsx'
        
        # 检查文件是否存在
        if not os.path.exists(excel_file):
            raise FileNotFoundError(f"找不到文件：{excel_file}")
            
        # 读取Excel文件
        df = pd.read_excel(excel_file)
        
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
        
        # 将DataFrame转换为JavaScript数组格式
        js_data = "const triviaDataAuto = [\n"
        
        for _, row in df.iterrows():
            js_data += "    {\n"
            js_data += f'        "Question": "{row["Question"]}",\n'
            js_data += f'        "Answer": {row["Answer"]},\n'
            js_data += f'        "Type": "{row["Type"]}",\n'
            js_data += f'        "Level": {row["Level"]},\n'
            js_data += f'        "Source": "{row["Source"]}",\n'
            js_data += f'        "Source_Link": "{row["Source_Link"]}"\n'
            js_data += "    },\n"
        
        js_data += "];\n"
        
        # 写入JavaScript文件
        with open('trivia_data_auto.js', 'w', encoding='utf-8') as f:
            f.write(js_data)
            
        print("成功创建 trivia_data_auto.js 文件！")
        
    except Exception as e:
        print(f"转换失败：{str(e)}")
        print("\n请确保：")
        print("1. Excel文件格式正确（.xlsx）")
        print("2. 文件包含 Question 和 Answer 列")
        print("3. Type 和 Level 列可以为空（将使用默认值）")
        print("4. 已安装所需的Python包：")
        print("   pip install pandas")

if __name__ == "__main__":
    convert_excel_to_js() 