---
title: Run Excel Macro
order: 1
---

# Run Excel Macro

## Function Description

:::tip 
Execute a macro in the workbook. The workbook file must be a macro-enabled workbook. Changes will be saved immediately.
:::

![Run Excel Macro](../../../../assets/Run%20Excel%20Macro_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'

- **Macro File**`string`: The macro file to be executed

- **Macro Name**`string`: The name of the macro to be executed

- **Macro Parameters**`TList<String>`: A set of parameters to pass to the macro (up to 30)


**Command Output**

- **Macro Output**`string`: Specify a variable to save the output of the macro (if any)

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

