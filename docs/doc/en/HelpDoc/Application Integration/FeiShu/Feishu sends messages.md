---
title: Feishu sends messages
order: 2
---

# Feishu sends messages

## Function Description

:::tip 
Sending messages through Feishu application
:::

![Feishu sends messages](../../../assets/Feishu%20sends%20messages_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Receive ID type**`Integer`: Feishu accepts message ID types, which can be selected from 【 open_id, union-id, user_id, email, chat_id 】

- **Message type**`Integer`: Feishu receives message types

- **Receive ID**`String`: The ID used by Feishu to receive information, combined with the type of ID received

- **Message content**`String`: The content of the message sent is usually a JSON string

- **UUID**`String`: A custom set unique string sequence used to request deduplication when sending messages


**Command Output**

- **Message ID**`String`: The message ID returned after successfully sending the message

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

