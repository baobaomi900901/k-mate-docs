---
title: Print Log
order: 1
---

# Print Log

## Function Description

:::tip 
Print variable or text output, and the output content can be viewed in the [Run Output] area
:::

![Print Log](../../../assets/Print%20Log_command.png)

## Configuration Item Description

### General

**Command Input**

- **Log Type**`Integer`: Type of the log

- **Log Content**`Variant`: Content of the log


**Command Output**

No output for the current command

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

