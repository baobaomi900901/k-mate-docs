---
title: Get IBM Notes Mail Messages
order: 2
---

# Get IBM Notes Mail Messages

## Function Description

:::tip 
Retrieves emails from the IBM Notes client on which the workflow is deployed
:::

![Get IBM Notes Mail Messages](../../../../assets/Get%20IBM%20Notes%20Mail%20Messages_command.png)

## Configuration Item Description

### General

**Command Input**

- **MailFolder**`string`: '($Inbox)'

- **Top**`Integer`: The number of messages to be retrieved starting from the top of the list.

- **GetAttachments**`Boolean`: Specifies whether to retrieve the attachments in the email message. By default, this check box is cleared.

- **SavePath**`string`: save attachments path.


**Command Output**

- **Messages**`TList<TMailMessage>`: The retrieved messages as a collection of Mail Message objects.

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

