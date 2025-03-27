---
title: Feishu sends urgent phone calls
order: 14
---

# Feishu sends urgent phone calls

## Function Description

:::tip 
Urgent the designated message to the target user through the Feishu client and phone
:::

![Feishu sends urgent phone calls](../../../assets/Feishu%20sends%20urgent%20phone%20calls_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **User ID type**`Integer`: The type of user ID can be open_id, user_id, Union_id

- **Message ID**`String`: Urgent message ID

- **User ID**`String`: Provide corresponding user IDs based on user ID types


**Command Output**

- **Result message**`String`: The result returned after sending the urgent message

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

