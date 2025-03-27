---
title: Replace cells
order: 16
---

# Replace cells

## Function Description

:::tip 
Replace eligible cells within the specified range of the spreadsheet
:::

![Replace cells](../../../../assets/Replace%20cells_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection

- **Worksheet name**`string`: Sheet name to replace cells

- **Scope**`string`: To replace the range of cells

- **Search for text**`string`: The text to be searched for

- **Replace Text**`string`: The text to be replaced with

- **Replacement method**`Integer`: Replacement method, optional [Region, Row, Column]

- **Ignore capitalization**`Boolean`: Do you want to ignore capitalization

- **Match Cells**`Boolean`: Does it match the entire cell

- **Search cell formula**`Boolean`: Do you only search for cell formulas


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

