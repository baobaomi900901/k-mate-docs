---
title: Export New PDF Document
---

# Export New PDF Document

## Function Description

:::tip 
This command is used to extract part of the content from the current PDF file and save it as a new PDF document. Please install the PDF plugin first from [Settings] - [Plugin Center] before use.
:::

## Configuration Item Description

### General

**Command Input**

- **If File Exists**`Integer`: Please select the file saving method when the file already exists

- **Save New File To**`string`: Please enter the save path for the new file

- **End Page Number**`Integer`: Please enter the end page number to extract. The page index starts from 1

- **Start Page Number**`Integer`: Please enter the start page number to extract. The page index starts from 1

- **Page Number**`Integer`: Please enter the page number to be exported. The page index starts from 1

- **Extract Range**`Integer`: Select the page range to extract

- **Original File Path**`string`: Please enter the original file path


**Command Output**

- **Save New File Path To**`string`: Specify a variable to save the new file path

### Advanced

- **Password**`string`: Password required to open the file

- **Use Password**`Boolean`: Whether a password is required to open the file


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

