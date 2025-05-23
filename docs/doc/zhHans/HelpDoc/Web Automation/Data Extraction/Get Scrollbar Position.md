---
title: 获取滚动条位置(web)
order: 5
---

# 获取滚动条位置(web)

## 功能说明

:::tip 功能描述
获取网页或元素中滚动条的当前位置或底部位置（即滚动条最大可滚动的长度）
:::

![获取滚动条位置(web)](../../../assets/获取滚动条位置(web)_command.png)

## 配置项说明

### 常规

**指令输入**

- **网页对象**`TBrowser`: 输入一个获取到的或通过'打开网页'函数创建的网页对象

- **元素滚动条**`Boolean`: 当需要获取某个指定元素的滚动条位置时，可以勾选该选项。若取消勾选，表示要获取整个网页的滚动条位置。

- **操作目标**`TTarget`: 请选择需要操作的网页元素。可以从「元素库」中选择一个已捕获的元素，或使用「捕获新元素」功能来获取网页中的新元素作为操作目标。

- **元素无滚动条，则自动向上查找**`Boolean`: 当启用时，如果目标元素没有滚动条，系统会自动查找该元素的父元素或祖先元素，以查找可滚动的元素。

- **滚动条**`Integer`: 选择要获取横向滚动条/纵向滚动条的位置

- **位置**`Integer`: 选择返回当前位置/底部位置。

    - **当前位置**：当前滚动条距离起始点的滚动距离
    
    - **底部位置**：滚动条最大可滚动的距离


**指令输出**

- **保存滚动条位置至**`Integer`: 指定一个变量名称，用于保存获取到滚动条的位置

### 高级

- **执行前的延迟(毫秒)**`Integer`: 指令执行前的等待时间

- **等待目标元素存在(毫秒)**`Integer`: 指定时间内未找到目标元素则执行错误处理逻辑

### 错误处理

- **打印错误日志**`Boolean`：当指令运行出错时，打印错误日志到【日志】面板。默认勾选。

- **处理方式**`Integer`：

 - **终止流程**：指令运行出错时，终止流程。

 - **忽略异常并继续执行**：指令运行出错时，忽略异常，继续执行流程。

 - **重试此指令**：指令运行出错时，重试运行指定次数指令，每次重试间隔指定时长。

## 使用示例

![获取滚动条位置(web)](../../../assets/获取滚动条位置(web)_demo.png)

**流程逻辑描述：** 使用【获取已打开的网页对象】指令获取目标网页对象 --> 使用【获取滚动条位置(web)】指令网页纵向滚动条的当前位置 --> 运行【打印日志】指令滚动条位置打印输出

## 常见错误及处理

无

## 常见问题解答

无

