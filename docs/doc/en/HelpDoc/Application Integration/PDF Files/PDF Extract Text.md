---
title: PDF Extract Text
order: 1
---

# PDF Extract Text

## Function Description

:::tip 
This command is used to extract text from a PDF file. Please install the PDF plugin in [Settings] - [Plugin Center] before using.
:::

![PDF Extract Text](../../../assets/PDF%20Extract%20Text_command.png)

## Configuration Item Description

### General

**Command Input**

- **File Path**`string`: Please enter the PDF file path

- **Extraction Range**`Integer`: Select the page range to extract

- **Page Number**`Integer`: Please enter the page number to extract. Page numbers start from 1.

- **Starting Page Number**`Integer`: Please enter the starting page number to extract. Page numbers start from 1.

- **Ending Page Number**`Integer`: Please enter the ending page number to extract. Page numbers start from 1.


**Command Output**

- **Save Text To**`string`: Specify a variable to save the extracted text

### Advanced

- **Use Password**`Boolean`: Does the file require a password to open?

- **Password**`string`: Enter the password required to open the file

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

