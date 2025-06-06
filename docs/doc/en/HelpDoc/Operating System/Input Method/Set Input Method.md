---
title: Set Input Method
order: 2
---

# Set Input Method

## Function Description

:::tip 
Set the input method for the currently active window
:::

![Set Input Method](../../../assets/Set%20Input%20Method_command.png)

## Configuration Item Description

### General

**Command Input**

- **Switch to**`Integer`: Select an input method


**Command Output**

No output for the current command

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

