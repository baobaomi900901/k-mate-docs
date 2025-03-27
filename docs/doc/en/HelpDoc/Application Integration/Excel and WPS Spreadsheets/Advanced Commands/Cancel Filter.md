---
title: Cancel Filter
order: 13
---

# Cancel Filter

## Function Description

:::tip 
Cancel worksheet filtering
:::

![Cancel Filter](../../../../assets/Cancel%20Filter_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Instance**`TWorkbookApplication`: Input an Excel instance obtained through 'Open or Create Excel'/'Get currently active Excel instance' function

- **Sheet Name**`string`: If left blank, it defaults to the currently activated sheet


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

