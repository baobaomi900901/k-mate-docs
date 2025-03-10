---
title: WeChatGetSearchElement
order: 6
---

# WeChatGetSearchElement

## Function Description

:::tip 
Get the WeChat chat search box
:::

![WeChatGetSearchElement](../../../assets/WeChatGetSearchElement_command.png)

## Configuration Item Description

### General

**Command Input**

- **Target**`TTarget`: Target, indicate WeChat operation elements, please capture the outermost window of WeChat

- **WaitBeforeMs(milliseconds)**`Integer`: Wait for loading time before execution(in milliseconds)


**Command Output**

- **SearchBox**`TUiElement`: SearchBox element


**Command Output**

### Error Handling

- **Print Error Logs**`Boolean`: Whether to print error logs to the "Logs" panel when the command fails. Default is checked. 

- **Handling Method**`Integer`:

    - **Terminate Process**: If the command fails, terminate the process.

    - **Ignore Exception and Continue Execution**: If the command fails, ignore the exception and continue the process.

    - **Retry This Command**: If the command fails, retry the command a specified number of times with a specified interval between retries.

## Usage Example

Process logic description:

## Common Errors and Handling

None

## Frequently Asked Questions

None

