---
title: Delete IBM Notes Mail Message
order: 1
---

# Delete IBM Notes Mail Message

## Function Description

:::tip 
Deletes an IBM Notes email message.
:::

![Delete IBM Notes Mail Message](../../../../assets/Delete%20IBM%20Notes%20Mail%20Message_command.png)

## Configuration Item Description

### General

**Command Input**

- **MailFolder**`string`: The mail folder where the message can be found

- **MailMessage**`TMailMessage`: The MailMessage object to be deleted


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

