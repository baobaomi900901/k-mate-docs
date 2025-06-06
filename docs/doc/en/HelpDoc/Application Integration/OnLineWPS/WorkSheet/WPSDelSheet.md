---
title: WPSDelSheet
order: 4
---

# WPSDelSheet

## Function Description

:::tip 
WPSDelSheet
:::

![WPSDelSheet](../../../../assets/WPSDelSheet_command.png)

## Configuration Item Description

### General

**Command Input**

- **WPSDocument**`TWPSDocument`: Input webpage object

- **SheetName**`String`: Sheet Name


**Command Output**

No output for the current command

### Advanced

- **TimeoutMS**`Integer`: The default value is 30000 milliseconds (30 seconds)

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

