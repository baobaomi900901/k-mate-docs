---
title: KRPAFileToBase64
order: 4
---

# KRPAFileToBase64

## Function Description

:::tip 
Convert the file to a Base64 format string
:::

![KRPAFileToBase64](../../../assets/KRPAFileToBase64_command.png)

## Configuration Item Description

### General

**Command Input**

- **sFile**`string`: It refers to the full path of the file


**Command Output**

- **sBase**`string`: sBase

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

