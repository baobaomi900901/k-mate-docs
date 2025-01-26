---
title: PDF Extract Images
---

# PDF Extract Images

## Function Description

:::tip 
This command is used to extract images from a PDF file. Before using, please install the PDF plugin in [Settings] - [Plugin Center].
:::

## Configuration Item Description

### General

**Command Input**

- **Save Images To**`string`: Please enter the folder path to save the images

- **Image Name Prefix**`string`: Please set a prefix for the extracted image names

- **Ending Page Number**`Integer`: Please enter the ending page number to extract. Page numbers start from 1.

- **Starting Page Number**`Integer`: Please enter the starting page number to extract. Page numbers start from 1.

- **Page Number**`Integer`: Please enter the page number to extract. Page numbers start from 1.

- **Extraction Range**`Integer`: Select the page range to extract

- **File Path**`string`: Please enter the PDF file path


**Command Output**

- **Save Image Path List To**`TList<String>`: Set a variable to save the list of image paths

### Advanced

- **Password**`string`: Enter the password required to open the file

- **Use Password**`Boolean`: Does the file require a password to open?


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

