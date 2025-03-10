---
title: Convert to DateTime
order: 5
---

# Convert to DateTime

## Function Description

:::tip 
Convert text to a DateTime, using the default format of %Y-%m-%d if not specified otherwise
:::

![Convert to DateTime](../../../assets/Convert to DateTime_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text**`string`: Enter the text to be converted to DateTime

- **Use Custom Format**`Boolean`: Whether to use a custom date time format

- **Date Time Format**`Integer`: Set the date time format for the conversion


**Command Output**

- **Save DateTime To**`TDateTime`: Specify a variable to save the converted DateTime

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

