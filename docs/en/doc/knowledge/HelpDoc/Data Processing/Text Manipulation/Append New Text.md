---
title: Append New Text
---

# Append New Text

## Function Description

:::tip 
Append new text content after the original text, completing the text concatenation function
:::

## Configuration Item Description

### General

**Command Input**

- **Text to Append**`string`: Enter a text string or select a variable containing the string

- **Append with New Line**`Boolean`: Whether to append with a new line

- **Original Text**`string`: Enter a text string or select a variable containing the string


**Command Output**

- **Save Result To**`string`: Specify a variable to save the result. If the variable name is the same as the original text variable, it will be overwritten


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

