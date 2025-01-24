---
title: Extract Content from Text
---

# Extract Content from Text

## Function Description

:::tip 
Extract specified content from text based on regular expressions
:::

## Configuration Item Description

### General

**Command Input**

- **Ignore Case`Boolean`**: Whether to ignore case when matching strings

- **Only Find First Match`Boolean`**: For example, if two phone numbers are found in the text, you can choose to get only the first one

- **Regular Expression`string`**: Enter a regular expression pattern

- **Extraction Method`Integer`**: Choose a method for extracting content

- **Text Content`string`**: Enter a text string or select a variable containing the string


**Command Output**

- **Save Result To`string`**: Specify a variable to save the extracted content


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

