import os

# 定义需要替换的字符串
old_string = '**Command Output**\n\n### Error Handling'
new_string = '### Error Handling'

# 遍历文件夹及子文件夹
def replace_in_files(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            try:
                # 只处理文本文件（可以根据需要修改）
                with open(file_path, 'r', encoding='utf-8') as f:
                    file_data = f.read()

                # 替换内容
                if old_string in file_data:
                    file_data = file_data.replace(old_string, new_string)

                    # 将替换后的内容写回文件
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(file_data)
                    print(f"Updated file: {file_path}")
            except Exception as e:
                print(f"Error processing file {file_path}: {e}")

# 替换某个文件夹路径下的所有文件
folder_path = 'D:\Git\KingAutomate Docs\k-mate-docs\docs\en\doc\knowledge\HelpDoc'  # 请修改为你的文件夹路径
replace_in_files(folder_path)
