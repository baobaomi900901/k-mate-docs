---
title: SendOutlookMail
order: 5
---

# SendOutlookMail

## Function Description

:::tip 
Sending email messages from Outlook
:::

![SendOutlookMail](../../../../assets/SendOutlookMail_command.png)

## Configuration Item Description

### General

**Command Input**

- **Attachments**`string`: Can send multiple attachments, use; segmentation

- **AttachmentsCollection**`TList<string>`: Allow specifying a set of files to be attached

- **Body**`string`: Email message body

- **Subject**`string`: Subject of email message

- **Account**`string`: Account used for sending email messages

- **Bcc**`string`: Hidden email message recipients

- **Cc**`string`: Secondary email message recipient

- **_To**`string`: Main email message recipients

- **IsBodyHtml**`Boolean`: Specify whether the message body is written in HTML format


**Command Output**

No output for the current command

### Advanced

- **MailMessage**`TMailMessage`: The email message to be forwarded. This field only supports email message objects

- **SentOnBehalfOfName**`string`: Indicate the display name of the expected sender of the email message

- **IsDraft**`Boolean`: Specify whether to save the email as a draft

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

