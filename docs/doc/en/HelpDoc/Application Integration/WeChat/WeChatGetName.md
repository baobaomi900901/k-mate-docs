---
title: WeChatGetName
order: 9
---

# WeChatGetName

## Function Description

:::tip 
Get the WeChat name of the WeChat window object
:::

![WeChatGetName](../../../assets/WeChatGetName_command.png)

## Configuration Item Description

### General

**Command Input**

- **Target**`TTarget`: Indicate the operational elements of WeChat, please use UIA mode to capture the outermost window of WeChat, UIA mode cannot capture, this parameter can be empty


**Command Output**

- **WeChatName**`string`: The WeChat name of the WeChat window object

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

