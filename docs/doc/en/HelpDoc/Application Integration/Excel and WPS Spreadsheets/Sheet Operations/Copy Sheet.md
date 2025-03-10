---
title: Copy Sheet
order: 3
---

# Copy Sheet

## Function Description

:::tip 
Copy the specified sheet
:::

![Copy Sheet](../../../../assets/Copy%20Sheet_command.png)

## Configuration Item Description

### General

**Command Input**

- **Source Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'

- **Source Sheet Name**`string`: Enter the name of the sheet to be copied, cannot be empty

- **Copy Method**`Integer`: Choose the copy method

- **Destination Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'

- **New Sheet Name**`string`: Enter the name of the new sheet, cannot be empty

- **Overwrite if Exists**`Boolean`: If the new sheet exists, it will overwrite the existing sheet


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

