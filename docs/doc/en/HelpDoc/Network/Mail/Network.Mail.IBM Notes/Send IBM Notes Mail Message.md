---
title: Send IBM Notes Mail Message
order: 4
---

# Send IBM Notes Mail Message

## Function Description

:::tip 
Sends an email message by using the IBM Notes client.
:::

![Send IBM Notes Mail Message](../../../../assets/Send%20IBM%20Notes%20Mail%20Message_command.png)

## Configuration Item Description

### General

**Command Input**

- **Attachments**`string`: (Collection)

- **HtmlPicture**`string`: Html image, can be separated by commas, multiple images

- **Body**`string`: The body of the email message.

- **Subject**`string`: The subject of the email message

- **From**`string`: Specify email message sender

- **Bcc**`string`: The hidden recipients of the email message.

- **Cc**`string`: The secondary recipients of the email message

- **To**`string`: The main recipients of the email message.

- **Form**`string`: The main recipients of the email Form.

- **IsBodyHtml**`Boolean`: Specifies whether the body of the message is written in HTML format.


**Command Output**

No output for the current command

### Advanced

- **AttachmentsCollection**`TList<string>`: Allows specifying a list of files to be attached

- **MailMessage**`TMailMessage`: The message to be forwarded. This field only supports MailMessage objects

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

