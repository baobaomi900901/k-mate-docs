---
title: Split Text to List
order: 9
---

# Split Text to List

## Function Description

:::tip 
This command uses a specified delimiter to split the target text into a list
:::

![Split Text to List](../../../assets/Split%20Text%20to%20List_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text to Convert**`string`: Enter a text string or select a variable containing the string

- **Delimiter Type**`Integer`: Select a method for splitting the list

- **Standard Delimiter**`Integer`: Select a standard delimiter

- **Custom Delimiter**`string`: Enter a custom delimiter

- **Regular Expression**`Boolean`: Use regular expressions

- **Filter Empty Items**`Boolean`: Filter out empty items


**Command Output**

- **Save Result To**`TList<String>`: Specify a variable to save the converted list

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

