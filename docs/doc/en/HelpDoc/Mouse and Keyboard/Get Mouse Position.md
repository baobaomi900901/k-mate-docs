---
title: Get Mouse Position
order: 5
---

# Get Mouse Position

## Function Description

:::tip 
Get the position of the mouse when this instruction is executed during the robot's runtime
:::

![Get Mouse Position](../../assets/Get%20Mouse%20Position_command.png)

## Configuration Item Description

### General

**Command Input**

- **Relative to**`Integer`: The position of the mouse


**Command Output**

- **Relative horizontal coordinate**`Integer`: Specify a variable to store the horizontal coordinate of the current mouse position

- **Relative vertical coordinate**`Integer`: Specify a variable to store the vertical coordinate of the current mouse position

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

