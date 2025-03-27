---
title: Fill cells with images
order: 19
---

# Fill cells with images

## Function Description

:::tip 
Fill the cell with an image
:::

![Fill cells with images](../../../../assets/Fill%20cells%20with%20images_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: To fill the worksheet name of the image in the cell

- **Fill position**`string`: To fill in the position of the cell in the image, please enter a cell such as A1

- **Image path**`string`: To fill the image path of the cell

- **Image width**`Integer`: The width of the image to be written into the cell

- **Image height**`Integer`: The height of the image to be written into the cell


**Command Output**

No output for the current command

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

