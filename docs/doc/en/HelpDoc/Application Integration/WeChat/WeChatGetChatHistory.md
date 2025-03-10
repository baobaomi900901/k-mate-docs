---
title: WeChatGetChatHistory
order: 5
---

# WeChatGetChatHistory

## Function Description

:::tip 
Specify WeChat name or WeChat ID to send WeChat messages or emoticons
:::

![WeChatGetChatHistory](../../../assets/WeChatGetChatHistory_command.png)

## Configuration Item Description

### General

**Command Input**

- **Target**`TTarget`: Target, indicate WeChat operation elements, please capture the outermost window of WeChat

- **KeepSystemMessages**`Boolean`: Keep system message(such as nudge)

- **KeepYourMessages**`Boolean`: Keep Your message

- **KeepOtherMessages**`Boolean`: Keep the other party's message

- **SendWindowMessages**`Boolean`: Whether to send WeChat messages through the background

- **MsgCount**`Integer`: Number of intercepted messages

- **WaitBeforeMs(milliseconds)**`Integer`: Wait for loading time before execution(in milliseconds)


**Command Output**

- **Texts**`TList<String>`: Message text list


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

