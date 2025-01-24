---
title: Invoke Sub-script
---

# Invoke Sub-script

## Function Description

:::tip 
Execute a sub-script with a specified name
:::

## Configuration Item Description

### General

**Command Input**

- **Input Parameters`string`**: Enter input parameters for the sub-script

- **Sub-script Name`string`**: Select the name of the sub-script to execute


**Command Output**

- **Save Output Result To`string`**: Specify a variable name to save the output result of the sub-script


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

