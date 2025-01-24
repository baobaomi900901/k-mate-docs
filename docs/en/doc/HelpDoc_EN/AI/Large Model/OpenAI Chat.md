---
title: OpenAI Chat
---

# OpenAI Chat

## Function Description

:::tip 
Use natural language dialogue to let AI complete tasks like original writing, error checking, customer service dialogues, translation, etc.
:::

## Configuration Item Description

### General

**Command Input**

- **Model Method`Integer`**: Choose the model method

- **Question Text`string`**: Enter the question text


**Command Output**

- **Save the result to`string`**: Specify a variable to save the returned text

### Advanced

- **Timeout (milliseconds)`Integer`**: Maximum waiting time (milliseconds)

- **Proxy Parameters`string`**: Proxy server, format as Address:Port


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

