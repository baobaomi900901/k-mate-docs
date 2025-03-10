---
title: Get Current Date and Time
order: 1
---

# Get Current Date and Time

## Function Description

:::tip 
Get the current date and time
:::

![Get Current Date and Time](../../../assets/Get%20Current%20Date%20and%20Time_command.png)

## Configuration Item Description

### General

**Command Input**

No input for the current command


**Command Output**

- **Save Current Date To**`TDateTime`: Specify a variable to save the current date and time

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

