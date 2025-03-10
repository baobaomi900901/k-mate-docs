---
title: Join List to Text
order: 8
---

# Join List to Text

## Function Description

:::tip 
This command is used to concatenate each element in the list with a specified delimiter, and finally convert it into a text string
:::

![Join List to Text](../../../assets/Join%20List%20to%20Text_command.png)

## Configuration Item Description

### General

**Command Input**

- **List to Convert**`TList<String>`: Enter a list

- **Delimiter Type**`Integer`: Select a delimiter type

- **Standard Delimiter**`Integer`: Select a delimiter

- **Number of Delimiters**`Integer`: The number of times the delimiter should be repeated

- **Custom Delimiter**`string`: Enter a custom delimiter


**Command Output**

- **Save Result To**`string`: Specify a variable to save the concatenated text

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

