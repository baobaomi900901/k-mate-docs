---
title: Extract Text
---

# Extract Text

## Function Description

:::tip 
This command is used to extract a segment of text
:::

## Configuration Item Description

### General

**Command Input**

- **Extraction Length**`Integer`: Enter the number of characters you want to extract

- **Extraction Method**`Integer`: If you want to extract '中国' from the text 'Hello中国欢迎你', the starting position is 5, the extraction length is 2, indicating that two characters should be extracted starting from the sixth character

- **Include Starting Text in Result**`Boolean`: When checked, the result includes the starting text. For example, with 'Purchase Order Number:1234567890', if the starting text is set to ':', and it is checked, the result will be ':1234567890'. If not checked, the result will be '1234567890'

- **Starting Text**`string`: If you want to extract the order number from the text 'Purchase Order Number:1234567890', the starting position would be ':'

- **Starting Character Position**`Integer`: If you want to extract '中国' from the text 'Hello中国欢迎你', the starting position would be 5

- **Starting Position**`Integer`: Specify the starting character position

- **Text Content**`string`: Enter a text string or select a variable containing the string


**Command Output**

- **Save Result To**`string`: Specify a variable to save the extracted text content


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

