---
title: Search for cells
order: 12
---

# Search for cells

## Function Description

:::tip 
Search for cells that meet the criteria within the specified range of the spreadsheet
:::

![Search for cells](../../../../assets/Search%20for%20cells_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: The name of the sheet to be searched for

- **Scope**`string`: The scope of the sheet to be searched, for example A1: C2

- **Text**`string`: The cell text to be searched for

- **Matching rules**`Integer`: Cell content matching rules, can choose full matching or partial matching


**Command Output**

- **Cell List**`TList<string>`: Read a list of cells that meet the criteria

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

