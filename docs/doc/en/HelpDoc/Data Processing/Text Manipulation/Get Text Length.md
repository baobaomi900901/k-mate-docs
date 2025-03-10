---
title: Get Text Length
order: 2
---

# Get Text Length

## Function Description

:::tip 
This command is used to get the length of a text string
:::

![Get Text Length](../../../assets/Get%20Text%20Length_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text Content**`string`: Enter a text string or select a variable containing the string


**Command Output**

- **Save Text Length To**`Integer`: Specify a variable to save the length of the text content

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

