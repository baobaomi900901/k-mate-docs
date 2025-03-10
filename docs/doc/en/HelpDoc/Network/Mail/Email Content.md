---
title: Email Content
order: 4
---

# Email Content

## Function Description

:::tip 
Return the specified email content
:::

![Email Content](../../../assets/Email%20Content_command.png)

## Configuration Item Description

### General

**Command Input**

- **Email**`TMailMessage`: Email

- **ContentType**`Integer`: Return the selected email content type


**Command Output**

- **EMailContent**`string`: Returned email content

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

