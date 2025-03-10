---
title: OpenAI Chat
order: 1
---

# OpenAI Chat

## Function Description

:::tip 
Use natural language dialogue to let AI complete tasks like original writing, error checking, customer service dialogues, translation, etc.
:::

![OpenAI Chat](../../../assets/OpenAI%20Chat_command.png)

## Configuration Item Description

### General

**Command Input**

- **Question Text**`string`: Enter the question text

- **Model Method**`Integer`: Choose the model method


**Command Output**

- **Save the result to**`string`: Specify a variable to save the returned text

### Advanced

- **Proxy Parameters**`string`: When our program cannot directly connect to the target network but the other party has installed a proxy server, format as Address:Port

- **DelayBefore(milliseconds)**`Integer`: The waiting time before instruction execution

- **Timeout (milliseconds)**`Integer`: Maximum waiting time (milliseconds)

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

