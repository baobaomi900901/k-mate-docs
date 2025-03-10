---
title: Save PDF as Image
order: 5
---

# Save PDF as Image

## Function Description

:::tip 
This instruction is used to save a specific page as an image
:::

![Save PDF as Image](../../../assets/Save%20PDF%20as%20Image_command.png)

## Configuration Item Description

### General

**Command Input**

- **File path**`string`: Please enter the PDF file path

- **Extract range**`Integer`: Select the page range to extract

- **Page number**`Integer`: Please enter the page number to extract. Page index starts from 1

- **Starting page number**`Integer`: Please enter the starting page number to extract. Page index starts from 1

- **Ending page number**`Integer`: Please enter the ending page number to extract. Page index starts from 1

- **Image name prefix**`string`: Please enter the image name prefix

- **Save image to**`string`: Please enter the folder path to save the image


**Command Output**

- **Save image to**`TList<String>`: Specify a variable to save the list of image paths

### Advanced

- **Use password**`Boolean`: Whether a password is required to open the file

- **Password**`string`: Password required to open the file

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

