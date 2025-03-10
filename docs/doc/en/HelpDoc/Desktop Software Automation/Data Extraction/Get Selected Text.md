---
title: Get Selected Text
order: 4
---

# Get Selected Text

## Function Description

:::tip 
Get the currently selected text in the active window
:::

![Get Selected Text](../../../assets/Get%20Selected%20Text_command.png)

## Configuration Item Description

### General

**Command Input**

- **Wait time (ms)**`Integer`: If the text selection process or network response is slow, consider extending the wait time to avoid missing content


**Command Output**

- **Save the selected text to**`string`: Specify a variable to save the selected text content

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

