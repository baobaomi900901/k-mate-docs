---
title: 插件自动安装失败
order: 2
---

# 插件自动安装失败

## 现象

在应用中点击【安装/重新安装】之后，浏览器【管理扩展】功能下未出现该插件，或者显示已安装但无法启用，如下图

![alt text](<assets/plug-in /a8ca5128-3cd6-4786-b605-91fb7d5e70f1.png>)

## 解决方案

首先需确定，在安装插件之前，是否以管理员身份打开应用，如使用管理员打开应用之后，在应用中安装插件仍然失败，请参考以下方案

1、打开K-RPA-Lite安装目录，进入\EdgePlug文件夹，找到krpa.crx文件

![alt text](<assets/plug-in /image-2.png>)

2、以Edge浏览器为例，点击右上角扩展图标（或者点击···，再点击【扩展】），点击【扩展管理】，打开左侧【开发者模式】和【允许来自其他应用商店的扩展】开关

![alt text](<assets/plug-in /image-4.png>)
![alt text](<assets/plug-in /image-5.png>)
![alt text](<assets/plug-in /image-6.png>)

3、将krpa.crx文件拖入该页面，即可安装成功

![alt text](<assets/plug-in /image-7.png>)
![alt text](<assets/plug-in /image-8.png>)
![alt text](<assets/plug-in /image-9.png>)