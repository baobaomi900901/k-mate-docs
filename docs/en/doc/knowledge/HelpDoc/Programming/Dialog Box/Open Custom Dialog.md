---
title: Open Custom Dialog
---

# Open Custom Dialog

## Function Description

:::tip 
Open Custom Dialog
:::

## Configuration Item Description

### General

**Command Input**

- **Design Dialog Interface**`string`: Design custom dialog interface


**Command Output**

- **Save User Input Result To**`string`: Specify a variable name to save the user input result, return None if the user cancels the dialog, otherwise return a dict object


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

