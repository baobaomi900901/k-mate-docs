---
title: DeepSeek Chat
order: 6
---

# DeepSeek Chat

## Function Description

:::tip 
I am DeepSeek, and I can help you write code and various creative content. Please entrust your task to me~
:::

![DeepSeek Chat](../../../assets/DeepSeek%20Chat_command.png)

## Configuration Item Description

### General

**Command Input**

- **sTokenKey**`string`: Enter the created API Key

- **Text**`string`: Enter the question text

- **Model**`Integer`: Select Model Method

- **Messages**`Integer`: Please choose the role you need


**Command Output**

- **_Result**`string`: Specify a variable to store the returned text

### Advanced

- **DelayBefore(milliseconds)**`Integer`: The waiting time before instruction execution

- **Timeout (milliseconds)**`Integer`: Maximum wait time (milliseconds)

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

