---
title: Convert Timestamp to DateTime
---

# Convert Timestamp to DateTime

## Function Description

:::tip 
Convert the timestamp to a DateTime, defaulting to second-level timestamps
:::

## Configuration Item Description

### General

**Command Input**

- **Output DateTime as Text`Boolean`**: If checked, the output of this command will be the text format of the new date, otherwise it will be a DateTime object

- **Timestamp Level`Integer`**: Select the timestamp level, which can be second, millisecond, or microsecond. The level determines the length of the timestamp: 10 digits for seconds, 13 for milliseconds, and 16 for microseconds.

- **Timestamp`string`**: Enter the timestamp to be converted to DateTime


**Command Output**

- **Save DateTime Text To`string`**: Specify a variable to save the text of the converted DateTime

- **Save DateTime To`TDateTime`**: Specify a variable to save the converted DateTime


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

