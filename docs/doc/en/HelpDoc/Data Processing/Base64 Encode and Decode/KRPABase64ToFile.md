---
title: KRPABase64ToFile
order: 3
---

# KRPABase64ToFile

## Function Description

:::tip 
Convert Base64 characters to the corresponding format file
:::

![KRPABase64ToFile](../../../assets/KRPABase64ToFile_command.png)

## Configuration Item Description

### General

**Command Input**

- **sBase64**`string`: The content of the text that needs to be converted

- **sFile：**`string`: Refers to the converted file, which will be saved to the full path locally


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

