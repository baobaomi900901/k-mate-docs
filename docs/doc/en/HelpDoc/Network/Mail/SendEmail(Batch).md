---
title: SendEmail(Batch)
order: 1
---

# SendEmail(Batch)

## Function Description

:::tip 

:::

![SendEmail(Batch)](../../../assets/SendEmail(Batch)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Sender**`string`: Email address of the sender

- **Sender Name**`string`: Display name of the sender

- **MailFilePath**`string`: Please enter the template file path

- **DownloadTemplate**`Boolean`: DownloadTemplate

- **Attachments**`string`: Attachments to be added to the email

- **Body is HTML**`Boolean`: Specify whether the email body is written in HTML format


**Command Output**

- **sMailResult**`TList<String>`: 

### Advanced

- **SMTP Server**`Integer`: Send email messages using different SMTP protocols

- **Specify SMTP Port**`Integer`: Enter the specified SMTP port number

- **Specify SMTP Server**`string`: Enter the specified SMTP server

- **Enable SSL**`Boolean`: Specify whether SSL should be used to send messages

- **SSL Version**`Integer`: Select SSL version

- **SMTP Authentication**`Boolean`: Authenticate the user with the SMTP server

- **Username**`string`: The username for SMTP server authentication

- **Authorization Code**`string`: The authorization code for SMTP server authentication

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

