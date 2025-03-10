---
title: Save or Save As Excel
order: 3
---

# Save or Save As Excel

## Function Description

:::tip 
Save or Save As Excel
:::

![Save or Save As Excel](../../../assets/Save%20or%20Save%20As%20Excel_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained from the function 'Open or Create Excel'/'Get the currently active Excel object'

- **Save Type**`Integer`: Select a save type

- **Excel File Path**`string`: Path of the opened Excel file

- **Overwrite if the file exists**`Boolean`: Overwrite the file if it exists

- **Save and Close**`Boolean`: Save and then close


**Command Output**

No output for the current command

### Advanced

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

