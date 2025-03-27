---
title: Nested cell images
order: 18
---

# Nested cell images

## Function Description

:::tip 
Write an image into the cell
:::

![Nested cell images](../../../../assets/Nested%20cell%20images_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: To write the worksheet name of the image in the cell

- **Write location**`string`: To write the position of the cell in the image, please enter a cell such as A1

- **Image path**`string`: To write the image path to the cell


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

