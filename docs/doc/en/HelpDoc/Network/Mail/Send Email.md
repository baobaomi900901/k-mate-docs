---
title: Send Email
order: 2
---

# Send Email

## Function Description

:::tip 
Send an email
:::

![Send Email](../../../assets/Send Email_command.png)

## Configuration Item Description

### General

**Command Input**

- **Sender**`string`: Email address of the sender

- **Sender Name**`string`: Display name of the sender

- **Recipient**`string`: Primary recipient of the email message

- **Cc**`string`: Secondary recipient of the email message

- **Bcc**`string`: Hidden recipient of the email message

- **Subject**`string`: Subject of the email message

- **Body**`string`: Body of the email message

- **Attachments**`string`: Attachments to be added to the email

- **Body is HTML**`Boolean`: Specify whether the email body is written in HTML format


**Command Output**

No output for the current command

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

