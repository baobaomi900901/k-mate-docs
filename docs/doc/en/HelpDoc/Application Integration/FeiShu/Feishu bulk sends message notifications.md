---
title: Feishu bulk sends message notifications
order: 8
---

# Feishu bulk sends message notifications

## Function Description

:::tip 
The Feishu application replies to specified messages
:::

![Feishu bulk sends message notifications](../../../assets/Feishu%20bulk%20sends%20message%20notifications_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Message type**`Integer`: The types of messages sent by Feishu can be found on the official website

- **Message content**`String`: Message ID to be revoked

- **Department ID List**`TList<string>`: List of department IDs for storage

- **open_id list**`TList<string>`: Store a list of user open_ids

- **user_id list**`TList<string>`: Store a list of user_id users

- **Union List**`TList<string>`: Store a list of user union-IDs


**Command Output**

- **Batch message ID**`String`: Message ID returned from batch sending of messages

- **Result message**`String`: The result returned after successful execution of batch message sending

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

