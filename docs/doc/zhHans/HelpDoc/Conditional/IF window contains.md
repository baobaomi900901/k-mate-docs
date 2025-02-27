---
title: IF 窗口包含
order: 7
---

# IF 窗口包含

## 功能说明

:::tip 功能描述
检测指定的元素是否包含在指定窗口中
:::

![image-20250227165350567](../../assets/image-20250227165350567.png)

## 配置项说明

### 常规

**指令输入**

- **窗口对象**`TWinObj`: 根据操作目标自动匹配或选择一个之前通过【获取窗口对象】指令创建的窗口对象
- **检测指定窗口是否**`Integer`: 检测指定窗口是否存在某个元素

- **操作目标**`TTarget`: 从「元素库」中选择一个已捕获的元素或通过「捕获新元素」来捕获新的窗口元素作为操作目标


**指令输出**

当前指令无输出

## 使用示例

![image-20250227141444391](../../assets/image-20250227141444391.png)

**流程逻辑描述：**获取当前激活的桌面窗口对象--> 判断桌面窗口对象中是否包含指定窗口元素 --> 若包含则执行【打印日志】指令打印"元素存在" --> 否则执行【打印日志】指令打印"元素不存在"

## 常见错误及处理

无

## 常见问题解答

无

