---
title: Feishu replies to messages
order: 6
---

# Feishu replies to messages

## Function Description

:::tip 
The Feishu application replies to specified messages
:::

![Feishu replies to messages](../../../assets/Feishu%20replies%20to%20messages_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Message typev**`Integer`: The types of messages replied by Feishu can be found on the official website

- **Message ID**`String`: Message ID to be replied to

- **Message content**`String`: The content of the message sent, please refer to the official website for details

- **UUID**`String`: A custom set unique string sequence used to request deduplication when sending messages

- **Reply in the form of a topic**`Boolean`: Should I reply to the message in the form of a topic


**Command Output**

- **ResultMsg**`String`: 

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

