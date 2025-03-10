---
title: Add file to clipboard
order: 1
---

# Add file to clipboard

## Function Description

:::tip 
Add a file to the clipboard for quick sending
:::

![Add file to clipboard](../../../assets/Add file to clipboard_command.png)

## Configuration Item Description

### General

**Command Input**

- **File path**`string`: Please enter the resource file name or a list of file names


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

