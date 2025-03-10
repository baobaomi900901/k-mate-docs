---
title: WeChatFindContact
order: 11
---

# WeChatFindContact

## Function Description

:::tip 
Search for contacts based on the provided WeChat ID and WeChat name or notes
:::

![WeChatFindContact](../../../assets/WeChatFindContact_command.png)

## Configuration Item Description

### General

**Command Input**

- **Target**`TTarget`: Target, indicate WeChat operation elements, please capture the outermost window of WeChat

- **Remarks/WeChatName**`string`: The Remarks/WeChatName to search for

- **WeChatID**`string`: The WeChat ID to search for

- **SendWindowMessages**`Boolean`: Whether to send WeChat messages through the background

- **Remarks Query Method**`Integer`: Remarks Supported search methods [equal query, fuzzy query]

- **WaitBeforeMs(milliseconds)**`Integer`: Wait for loading time before execution(in milliseconds)


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

