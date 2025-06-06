---
title: WeChatGetMsgList
order: 7
---

# WeChatGetMsgList

## Function Description

:::tip 
Get a list of WeChat message elements
:::

![WeChatGetMsgList](../../../assets/WeChatGetMsgList_command.png)

## Configuration Item Description

### General

**Command Input**

- **Target**`TTarget`: Indicate the operational elements of WeChat, please use UIA mode to capture the outermost window of WeChat, UIA mode cannot capture, this parameter can be empty

- **WaitBeforeMs(milliseconds)**`Integer`: Wait for loading time before execution(in milliseconds)


**Command Output**

- **MsgList**`TList<TUiElement>`: Element List

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

