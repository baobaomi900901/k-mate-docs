# Resume-template

文件结构

```
.
├── .github
│   ├── 📂 workflows // GitHub Actions 工作流
│   │   └── build.yml
├── docs
│   ├── 📂.vitepress
│   │   ├── 📂 cache // 缓存文件夹
│   │   ├── 📂 components // 自定义组件
│   │   ├── 📂 dist // 编译后的静态资源
│   │   ├── 📂 nvas // 路由设置
│   │   │   ├── navs.json // 路由变量 ( 重点 )
│   │   │   └── setMenu.ts // 自动生成路由的方法
│   │   ├── 📂 src // vite-press 组件源码, 用来参照官方文档编写自定义组件
│   │   ├── 📂 plugin // 插件文件夹
│   │   ├── 📂 theme // 主题文件夹
│   │   │   ├── index.js // 主题配置
│   │   │   └── styles // 主题样式
│   │   └── config.js // docs 配置文件
│   ├── 📂 doc // 中文文档
│   ├── 📂 en // 国际化
│   │   └── 📂 doc // 应与中文文档同结构
│   ├── ...
│   ├── 📂 public // 文档静态资源, 使用时"/" + 资源名称
│   └── index.md // 首页
├── 📂 public // vue 项目静态资源 ( 忽略 )
├── 📂 src // vue 项目源码 ( 忽略 )
├── .gitignore // git 忽略文件
├── index.html // vue 项目入口文件
├── jsconfig.json // vscode 编辑器配置
├── package.json // npm 包管理文件
├── postcss.config.js // postcss 配置文件
├── README.md // 项目说明文件
├── tailwind.config.js // tailwindcss 配置文件
├── tailwind.css // tailwindcss 样式文件
├── vite.config.js // vite 配置文件
└── yarn.lock // yarn 锁文件
```

远端部署
```
curl --location 'http://k-rpa-lite.kingsware.cn:58080/deploy' \
--max-time 900 \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer q38qjF0Uj1fMw1zfVGrw' \
--data '{
    "url": "https://king.docs.donxj.com/dist.tar.gz",
    "target": "/root/k-rpa-lite-docs"
}'
```