---
title: WeChatPushNotice
order: 10
---

# WeChatPushNotice

## Function Description

:::tip 
Access the interface provided by PushPlus to push notifications to the official account
:::

![WeChatPushNotice](../../../assets/WeChatPushNotice_command.png)

## Configuration Item Description

### General

**Command Input**

- **Token**`string`: The token provided on the PushPlus official website needs to be obtained from the website

- **Title**`string`: Notice Title

- **Content**`string`: Notice Content


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

