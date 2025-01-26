---
title: Pad Text to Specified Length
---

# Pad Text to Specified Length

## Function Description

:::tip 
This command is used to pad text to a specified length
:::

## Configuration Item Description

### General

**Command Input**

- **Total Length**`Integer`: The total length of the padded text

- **Padding Text**`string`: Enter a text string or select a variable containing the string

- **Padding Method**`Integer`: Add padding text to the left or right end of the original text

- **Original Text**`string`: Enter a text string or select a variable containing the string


**Command Output**

- **Save Result To**`string`: Specify a variable to save the padded text content


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

