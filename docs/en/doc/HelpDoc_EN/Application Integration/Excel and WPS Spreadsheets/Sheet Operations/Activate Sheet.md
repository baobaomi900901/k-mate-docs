---
title: Activate Sheet
---

# Activate Sheet

## Function Description

:::tip 
Activate the specified sheet by name or position
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet Name/Position`string`**: Enter the name or position of the sheet to be activated, cannot be empty

- **Activation Method`Integer`**: Choose the activation method

- **Excel Object`TWorkbookApplication`**: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'


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

