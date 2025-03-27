---
title: MoveOutlookMessage
order: 2
---

# MoveOutlookMessage

## Function Description

:::tip 
Move Outlook email messages to the specified folder
:::

![MoveOutlookMessage](../../../../assets/MoveOutlookMessage_command.png)

## Configuration Item Description

### General

**Command Input**

- **MailMessage**`TMailMessage`: Email message object to be moved

- **MailFolder**`string`: The email message will be moved to the email folder within it

- **Accounts**`string`: The account used to access the messages to be moved


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

