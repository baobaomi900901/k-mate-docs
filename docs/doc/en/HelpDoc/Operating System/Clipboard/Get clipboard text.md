---
title: Get clipboard text
order: 3
---

# Get clipboard text

## Function Description

:::tip 
Retrieve text content from the clipboard
:::

![Get clipboard text](../../../assets/Get clipboard text_command.png)

## Configuration Item Description

### General

**Command Input**

No input for the current command


**Command Output**

- **Save clipboard text to**`string`: Enter a name to save the clipboard text content

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

