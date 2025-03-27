---
title: WeChatSendMsg
order: 2
---

# WeChatSendMsg

## Function Description

:::tip 
Batch sending WeChat messages by reading specific information from template files
:::

![WeChatSendMsg](../../../assets/WeChatSendMsg_command.png)

## Configuration Item Description

### General

**Command Input**

- **Target**`TTarget`: Indicate the operational elements of WeChat, please use UIA mode to capture the outermost window of WeChat, UIA mode cannot capture, this parameter can be empty

- **Remarks/WeChatName**`string`: Priority should be given to searching through Remarks/WeChatName

- **WeChatNumber**`string`: Can specify to obtain chat messages with someone through WeChatNumber

- **RemarksQueryMethod**`Integer`: Remarks Supported search methods [equal query, fuzzy query]

- **SendingMethod**`Integer`: 

- **SendWindowMessages**`Boolean`: Whether to send WeChat messages through the background

- **WaitBeforeMs**`Integer`: 

- **Text**`string`: Messages to be sent


**Command Output**

No output for the current command

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

