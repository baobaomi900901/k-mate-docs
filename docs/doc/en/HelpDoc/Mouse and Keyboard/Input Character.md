---
title: Input Character
order: 2
---

# Input Character

## Function Description

:::tip 
Input text to the currently active window
:::

![Input Character](../../assets/Input%20Character_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text Content**`string`: Input text content

- **Clear Field**`Boolean`: If checked, clear the content before inputting


**Command Output**

No output for the current command

### Advanced

- **Key Input Interval (Milliseconds)**`Integer`: Time interval between two key presses

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

