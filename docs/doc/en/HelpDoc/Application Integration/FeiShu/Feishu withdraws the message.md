---
title: Feishu withdraws the message
order: 7
---

# Feishu withdraws the message

## Function Description

:::tip 
The Feishu application replies to specified messages
:::

![Feishu withdraws the message](../../../assets/Feishu%20withdraws%20the%20message_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Objectv**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Message ID**`String`: Message ID to be revoked


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

