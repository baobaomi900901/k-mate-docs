---
title: Wait for Text (OCR)
order: 12
---

# Wait for Text (OCR)

## Function Description

:::tip 
Wait for the specified text to appear/disappear on the screen
:::

![Wait for Text (OCR)](../../assets/Wait for Text (OCR)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text**`string`: The string to wait for

- **iOCRType**`Integer`: 

- **Target**`TTarget`: Target element


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Timeout (Milliseconds)**`Integer`: Maximum wait time


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

