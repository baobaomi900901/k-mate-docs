# 文档

安装依赖

```
npm i
```

开发

```
npm run dev

```

打包文档

```
npm run docs:build

# DEBUG
DEBUG='vitepress:*' or DEBUG='vite:*' npm run docs:build
```

文件结构

```

暂无

```

## 打包文档

```bash
tar -zcvf doc.tar.gz \
    --strip-components 3 \
    --exclude='*/assets' \
    --exclude='*/.DS_Store' \
    --exclude='*/index.md' \
    --exclude='*/images' \
    docs/doc/zhHans/UserDoc \
    docs/doc/zhHans/HelpDoc \
    docs/doc/zhHans/FAQ
```

## 更新 ai 部门文档

将打包的 `doc.tar.gz` 上传到 `sftp://10.11.1.87:40109//root/k-rpalite-doc-llm` 中, 链接: `http://10.11.1.87:40109/doc.tar.gz`

GET请求，http://192.168.6.35:8766/help_docs/data_process/update_data，调用后返回`{"code": 200, "messages": "数据更新任务已启动"}`，然后我们这边后台会去调用文件服务 http://10.11.1.87:40109/doc.tar.gz 进行数据下载，把数据更新至知识库，更新过程服务暂停10分钟

```bash
curl --location 'http://192.168.6.35:8766/help_docs/data_process/update_data'
```
