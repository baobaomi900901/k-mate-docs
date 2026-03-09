---
title: 滑块拼图验证码(Web)
order: 1
---

# 滑块拼图验证码(Web)
- 适用系统: windows

## 功能说明

:::tip 功能描述
调用AI元素识别能力，自动完成滑块拼图验证码的识别与验证。
:::

![alt text](assets/SlideCircusVerification(Web)/image-2.png)

## 指令输入

**网页对象** `TBrowser`:
- 选择包含滑块验证码的网页对象。

**背景元素** `TTarget`:
- 选择拼图所在的背景图网页元素。

**缺块元素** `TTarget`:
- 选择需要被拖拽拼接的目标图块元素。

**拖拽滑块** `TTarget`:
- 选择用于拖拽的滑块网页元素，通过拖拽此滑块将目标图块与背景拼接。

## 高级

**偏移距离** `Integer` (选填):
- 若识别结果存在固定的左右偏移，可设置此值进行距离补偿。

## 使用示例

![alt text](assets/SlideCircusVerification(Web)/image-3.png)

- 打开目标网页 --> 使用【滑块拼图验证码】组件，分别指定网页对象、背景、缺块和滑块元素 --> 组件自动完成识别与拖拽验证。/