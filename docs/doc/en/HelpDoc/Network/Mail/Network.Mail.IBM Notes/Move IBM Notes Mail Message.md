---
title: Move IBM Notes Mail Message
order: 3
---

# Move IBM Notes Mail Message

## Function Description

:::tip 
Moves an IBM Notes email message to a specified folder.
:::

![Move IBM Notes Mail Message](../../../../assets/Move%20IBM%20Notes%20Mail%20Message_command.png)

## Configuration Item Description

### General

**Command Input**

- **FromFolder**`string`: The mail folder where the message can be found

- **MailFolder**`string`: The mail folder to which the messages are to be moved

- **MailMessage**`TMailMessage`: The MailMessage object to be moved


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

