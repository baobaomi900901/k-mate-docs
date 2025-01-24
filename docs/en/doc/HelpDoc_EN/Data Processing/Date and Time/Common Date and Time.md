---
title: Common Date and Time
---

# Common Date and Time

## Function Description

:::tip 
Output common date and time in a specified format
:::

## Configuration Item Description

### General

**Command Input**

- **Remove Leading Zeros:`Boolean`**: Remove leading zeros from months and days, e.g., change 06 month to 6 month

- **Date Format:`Integer`**: Supports YYYY-MM-DD, YYYY/MM/DD, etc.

- **Date:`Integer`**: The date to be obtained, supporting today's date, yesterday's date, tomorrow's date, the first day of the week, the last day of the week, etc.


**Command Output**

- **Date String:`string`**: Output common date in a specified format


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

