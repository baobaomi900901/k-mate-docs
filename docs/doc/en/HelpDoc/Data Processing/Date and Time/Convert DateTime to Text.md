---
title: Convert DateTime to Text
order: 6
---

# Convert DateTime to Text

## Function Description

:::tip 
Convert DateTime object to text
:::

![Convert DateTime to Text](../../../assets/Convert%20DateTime%20to%20Text_command.png)

## Configuration Item Description

### General

**Command Input**

- **DateTime:**`TDateTime`: Enter the DateTime object to be converted to text

- **Date Time Format:**`Integer`: Set the date time format for the conversion

- **Custom Format**`string`: Custom Format

- **Remove Leading Zeros:**`Boolean`: Remove leading zeros from months and days, e.g., change 06 month to 6 month


**Command Output**

- **Save Text To**`string`: Specify a variable to save the converted text

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

