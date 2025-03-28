---
title: 拖拽元素(web)
order: 1
---

# 拖拽元素(web)

## 功能说明

:::tip 功能描述
在指定的网页中，把某个元素拖拽到指定位置
:::

![拖拽元素(web)](../../../assets/拖拽元素(web)_command.png)

## 配置项说明

### 常规

**指令输入**

- **网页对象**`TBrowser`: 输入一个获取到的或通过'打开网页'函数创建的网页对象

- **操作目标**`TTarget`: 请选择要拖拽的网页元素。可以从「元素库」中选择一个已捕获的元素，或使用「捕获新元素」功能来获取网页中的新元素作为操作目标。

- **拖拽方法**`Integer`: 请选择元素的拖拽方法，包括拖拽至目标点和拖拽至目标元素上。

- **X**`Integer`: 拖拽到的目标位置的横坐标

- **Y**`Integer`: 拖拽到的目标位置的纵坐标

- **目标元素**`TTarget`: 需要拖拽到的目标元素。可以从「元素库」中选择一个已捕获的元素，或使用「捕获新元素」功能来获取网页中的新元素作为操作目标。


**指令输出**

当前指令无输出

### 高级

- **执行前的延迟(毫秒)**`Integer`: 指令执行前的等待时间（毫秒）

- **延迟时间(毫秒)**`Integer`: 指令执行完成后的继续等待时间（毫秒）

- **鼠标按下元素部位**`Integer`: 支持在拖拽元素中心位置、随机位置(在元素矩形范围内)、自定义位置处按下鼠标

- **移速**`Integer`: 移动鼠标的速度

- **鼠标释放元素位置**`Integer`: 支持在目标元素中心位置、随机位置(元素矩形范围内)、自定义位置处释放鼠标

- **自定义**`Integer`: 指定一个自定义的位置

- **横向移动**`Integer`: 如果输入的是正数，则会向右移动，如果输入的是负数，则会向左移动

- **纵向移动**`Integer`: 如果输入的是正数，则会向下移动，如果输入的是负数，则会向上移动

- **等待目标元素存在(毫秒)**`Integer`: 指定时间内未找到目标元素则执行错误处理逻辑

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

 - **终止流程**：指令运行出错时，终止流程。

 - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

 - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例

![拖拽元素(web)](../../../assets/拖拽元素(web)_demo.png)

**流程逻辑描述：** 使用【打开网页】指令打开指定网页 --> 使用【拖拽元素(web)】指令将元素拖拽到目标元素上 --> 使用【拖拽元素(web)】指令将元素拖拽到指定位置上

## 常见错误及处理

无

## 常见问题解答

无

