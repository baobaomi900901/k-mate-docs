---
title: 新 Java 插件安装
order: 4
---

## 安装方法

1. 修改newjava\jdk版本\InitNewJava.bat文件的NEWJAVAHOME
2. 保存后双击执行
3. 控制台勾选系统设置【其他】-【启用新Java检索方法】，Lite在【设置】-【元素指明方式】-【Java指明方式】选择【新Java模式】

## 注意事项：

1. C:\User\用户名目录下存在.accessibility.properties文件的话，启动Java程序之前要把该文件删掉
2. 不同的机器使用的dll文件不一致（KrpaJavaBridgeV8.dll，KrpaJavaBridgeV8_x64.dll），即使都是64位操作系统
3. Java程序和控制台（代理）的启动权限要一致，在【任务管理器】-【详细信息】特权列查看
4. 若需要同时使用新旧插件，参考newjava\Readme.txt
