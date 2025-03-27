---
title: Feishu Group Robot Message
order: 15
---

# Feishu Group Robot Message

## Function Description

:::tip 
Custom Robot Sending Messages in Feishu Group
:::

![Feishu Group Robot Message](../../../assets/Feishu%20Group%20Robot%20Message_command.png)

## Configuration Item Description

### General

**Command Input**

- **Message type**`Integer`: The types of messages sent by Feishu Robot can be found on the official website

- **Robot address**`String`: Custom Robot Webhook

- **Signature**`String`: The key used for signature verification in custom robot security settings

- **Message content**`String`: The content of the message sent, please refer to the official website for details


**Command Output**

No output for the current command

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

