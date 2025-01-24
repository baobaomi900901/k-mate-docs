---
title: PDF Extract Text
---

# PDF Extract Text

## Function Description

:::tip 
This command is used to extract text from a PDF file. Please install the PDF plugin in [Settings] - [Plugin Center] before using.
:::

## Configuration Item Description

### General

**Command Input**

- **Ending Page Number`Integer`**: Please enter the ending page number to extract. Page numbers start from 1.

- **Starting Page Number`Integer`**: Please enter the starting page number to extract. Page numbers start from 1.

- **Page Number`Integer`**: Please enter the page number to extract. Page numbers start from 1.

- **Extraction Range`Integer`**: Select the page range to extract

- **File Path`string`**: Please enter the PDF file path


**Command Output**

- **Save Text To`string`**: Specify a variable to save the extracted text

### Advanced

- **Password`string`**: Enter the password required to open the file

- **Use Password`Boolean`**: Does the file require a password to open?


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

