---
title: Convert DateTime to Timestamp
---

# Convert DateTime to Timestamp

## Function Description

:::tip 
Convert the DateTime to a timestamp
:::

## Configuration Item Description

### General

**Command Input**

- **Timestamp Level**`Integer`: Select the timestamp level, which can be second, millisecond, or microsecond. The level determines the length of the timestamp: 10 digits for seconds, 13 for milliseconds, and 16 for microseconds.

- **DateTime**`TDateTime`: Enter a DateTime object


**Command Output**

- **Save Timestamp To**`string`: Specify a variable to save the converted timestamp


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

