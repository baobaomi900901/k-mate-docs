---
title: Format setting
order: 14
---

# Format setting

## Function Description

:::tip 
Format cells within the specified range of the spreadsheet
:::

![Format setting](../../../../assets/Format%20setting_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: To set the sheet name for a cell

- **Scope**`string`: To set the range of cell formatting

- **Font size**`string`: The font size is 9-36, with a fixed line spacing of 1.5, such as 12pt/1.5

- **Setting method**`Integer`: The method of setting cells can be selected as [range, row, column]

- **Digital format**`Integer`: Optional numerical formats, please refer to the official website for details

- **Bold font**`Boolean`: Is the font bolded


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

