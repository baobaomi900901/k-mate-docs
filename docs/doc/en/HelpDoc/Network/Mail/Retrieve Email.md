---
title: Retrieve Email
order: 3
---

# Retrieve Email

## Function Description

:::tip 
Retrieve email from the specified mailbox
:::

![Retrieve Email](../../../assets/Retrieve%20Email_command.png)

## Configuration Item Description

### General

**Command Input**

- **Email Type**`Integer`: Send email messages using different email types

- **IMAP Server**`string`: Enter the specified IMAP server

- **IMAP Port**`Integer`: Enter the specified IMAP port number

- **Enable SSL**`Boolean`: Specify whether SSL should be used to send messages

- **SSL**`Integer`: Can switch between different secure socket protocols for sending

- **Email Account**`string`: The user for IMAP server authentication, usually the email account

- **Authorization Code**`string`: The authorization code for IMAP server authentication, usually requires SMS verification to enable, some email services may use account password instead, depending on the email service provider

- **Number of Emails**`Integer`: Retrieve the top N emails from the mailbox

- **Only Unread Emails**`Boolean`: Retrieve only unread emails

- **Save Email Attachments**`Boolean`: Whether to save email attachments

- **Save Folder**`string`: Path to save attachments


**Command Output**

- **Save Email List To**`TList<TMailMessage>`: Specify a variable name to store the retrieved email list

### Advanced

- **Folder Name**`string`: Folder name

- **Mark as Read**`Boolean`: After retrieving emails, mark them as read

- **Content in Sender**`string`: Content in the sender field

- **Content in Recipient**`string`: Content in the recipient field

- **Content in Subject**`string`: Content in the subject line

- **Content in Body**`string`: Content in the body of the email

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

