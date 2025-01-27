---
title: Add or Subtract Time
---

# Add or Subtract Time

## Function Description

:::tip 
Add or subtract time from a specified date and time, supporting text-formatted dates
:::

## Configuration Item Description

### General

**Command Input**

- **Output Text Format**`Boolean`: If checked, specify that the output of this command is in text format of the new date, otherwise it is a date and time object

- **Time Unit**`Integer`: Select the time unit

- **Duration**`Integer`: Enter the duration

- **Adjustment Method:**`Integer`: Choose to add or subtract time

- **Original Date and Time**`TDateTime`: Enter a date and time object


**Command Output**

- **Save New Date Text To**`string`: Specify a variable to save the text of the changed date and time

- **Save New Date and Time To**`TDateTime`: Specify a variable to save the changed date and time


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

