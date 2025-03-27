---
title: Feishu Batch Withdrawal Message
order: 9
---

# Feishu Batch Withdrawal Message

## Function Description

:::tip 
The Feishu application withdraws the specified batch of messages sent
:::

![Feishu Batch Withdrawal Message](../../../assets/Feishu%20Batch%20Withdrawal%20Message_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Batch message ID**`String`: Batch message ID to be recalled


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

