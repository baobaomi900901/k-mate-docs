---
title: Save PDF as Image
---

# Save PDF as Image

## Function Description

:::tip 
This instruction is used to save a specific page as an image
:::

## Configuration Item Description

### General

**Command Input**

- **Save image to`string`**: Please enter the folder path to save the image

- **Image name prefix`string`**: Please enter the image name prefix

- **Ending page number`Integer`**: Please enter the ending page number to extract. Page index starts from 1

- **Starting page number`Integer`**: Please enter the starting page number to extract. Page index starts from 1

- **Page number`Integer`**: Please enter the page number to extract. Page index starts from 1

- **Extract range`Integer`**: Select the page range to extract

- **File path`string`**: Please enter the PDF file path


**Command Output**

- **Save image to`TList<String>`**: Specify a variable to save the list of image paths

### Advanced

- **Password`string`**: Password required to open the file

- **Use password`Boolean`**: Whether a password is required to open the file


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

