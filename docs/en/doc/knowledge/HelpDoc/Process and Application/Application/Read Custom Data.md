---
title: Read Custom Data
---

# Read Custom Data

## Function Description

:::tip 
Read custom data that has been saved in the process
:::

## Configuration Item Description

### General

**Command Input**

- **Key**`string`: The Key specified in the 【Save Custom Data】 instruction


**Command Output**

- **Data Content**`string`: Save the retrieved custom data content to a variable, return null if not found based on the Key


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

