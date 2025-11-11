---
title: 设置全局参数
order: 2
---

# 设置全局参数
- 适用系统: windows / 信创

## 功能说明

:::tip 功能描述
增加全局参数，保存到服务器
:::

![alt text](<assets/Set Server Param Value/image.png>)

## 配置项说明

### 常规

**指令输入**

- **分组名称**`string`: 

  -  需要增加的全局参数所在的分组,分组须写全路径,以\分割,如\a\b代表a分组下的子分组b

- **参数名称**`string`: 
  
  - 需要增加的全局参数的名称,名称重复则不添加

- **参数类型**`string`: 
  
  -  选择全局参数的类型

- **参数值**`string`: 
  
  -  需要增加的全局参数值
  

## 使用示例

使用[设置全局参数]函数 来创建一个全局参数 完成后可用[获取全局参数]函数 获取到此参数
![alt text](<assets/Get Server Param Value/image-1.png>)

