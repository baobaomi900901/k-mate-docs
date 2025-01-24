---
title: Get DateTime Interval
---

# Get DateTime Interval

## Function Description

:::tip 
Get the interval between two dates and times
:::

## Configuration Item Description

### General

**Command Input**

- **Time Unit`Integer`**: Choose the time unit for the interval calculation

- **End Time`TDateTime`**: Enter a date and time object for the end

- **Start Time`TDateTime`**: Enter a date and time object for the start


**Command Output**

- **Save Interval To`Integer`**: Specify a variable to save the calculated interval


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

