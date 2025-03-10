---
title: Add Remark
order: 3
---

# Add Remark

## Function Description

:::tip 
Insert a textual remark into the process
:::

![Add Remark](../../../assets/Add Remark_command.png)

## Configuration Item Description

### General

**Command Input**

- **Remark Description**`string`: Description of the remark


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

