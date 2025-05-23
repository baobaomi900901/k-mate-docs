---
title: Open Select Folder Dialog
order: 6
---

# Open Select Folder Dialog

## Function Description

:::tip 
Open Select Folder Dialog
:::

![Open Select Folder Dialog](../../../assets/Open%20Select%20Folder%20Dialog_command.png)

## Configuration Item Description

### General

**Command Input**

- **Dialog Title**`string`: Dialog Title


**Command Output**

- **Save Selected Folder Result To**`string`: Specify a variable name to save the selected folder result, return null string if the user cancels the dialog

### Advanced

- **Default Path**`string`: Default path

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

