---
title: Export to PDF
---

# Export to PDF

## Function Description

:::tip 
Export the Excel file to PDF
:::

## Configuration Item Description

### General

**Command Input**

- **Overwrite if file exists**`Boolean`: Overwrite if file exists

- **Save PDF to**`string`: The filename where the exported PDF will be saved

- **All Sheets**`Boolean`: If checked, export all worksheets

- **Sheet Name**`string`: Enter sheet name, leave blank for the currently active sheet

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained by the function 'Open or Create Excel'/'Get current active Excel object'


**Command Output**

No output for the current command


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

