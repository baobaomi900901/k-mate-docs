---
title: Get Input Method List
---

# Get Input Method List

## Function Description

:::tip 
Get all system input method names, requires administrator privileges
:::

## Configuration Item Description

### General

**Command Input**

No input for the current command


**Command Output**

- **Save input method names to**`TList<String>`: Enter a variable to save the list of input method names


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

