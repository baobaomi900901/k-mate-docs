---
title: Extract Content from Text
order: 1
---

# Extract Content from Text

## Function Description

:::tip 
Extract specified content from text based on regular expressions
:::

![Extract Content from Text](../../../assets/Extract%20Content%20from%20Text_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text Content**`string`: Enter a text string or select a variable containing the string

- **Extraction Method**`Integer`: Choose a method for extracting content

- **Regular Expression**`string`: Enter a regular expression pattern

- **Only Find First Match**`Boolean`: For example, if two phone numbers are found in the text, you can choose to get only the first one

- **Ignore Case**`Boolean`: Whether to ignore case when matching strings


**Command Output**

- **Save Result To**`string`: Specify a variable to save the extracted content

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

