# 文档

安装依赖

```
npm i
```

开发

```
npm run dev

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
