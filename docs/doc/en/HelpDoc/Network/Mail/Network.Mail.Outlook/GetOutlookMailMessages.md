---
title: GetOutlookMailMessages
order: 1
---

# GetOutlookMailMessages

## Function Description

:::tip 
Retrieve email messages from Outlook
:::

![GetOutlookMailMessages](../../../../assets/GetOutlookMailMessages_command.png)

## Configuration Item Description

### General

**Command Input**

- **MailFolder**`string`: The default is' inbox ', and multi-level directories are separated by commas in English

- **Account**`string`: Account used to access email messages to be retrieved

- **Top**`Integer`: Number of messages retrieved from the top of the list

- **OnlyUnreadMessages**`Boolean`: Specify whether to retrieve only unread messages. By default, this checkbox is selected

- **SaveAttachments**`Boolean`: After selecting, the email attachment will be saved

- **AttachmentsSaveFolder**`string`: Please enter or select the path to save the attachment


**Command Output**

- **Messages**`TList<TMailMessage>`: Retrieve email messages as a collection of email message objects

### Advanced

- **Filter**`string`: String used as a filter for email messages to be retrieved

- **SortOrder**`Integer`: Sort by recipient date

- **MarkAsRead**`Boolean`: Specify whether to mark retrieved emails as read. By default, clear this checkbox

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

