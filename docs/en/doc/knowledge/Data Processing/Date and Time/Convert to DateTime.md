---
title: Convert to DateTime
---

# Convert to DateTime

## Function Description

:::tip 
Convert text to a DateTime, using the default format of %Y-%m-%d if not specified otherwise
:::

## Configuration Item Description

### General

**Command Input**

- **Date Time Format**`Integer`: Set the date time format for the conversion

- **Use Custom Format**`Boolean`: Whether to use a custom date time format

- **Text**`string`: Enter the text to be converted to DateTime


**Command Output**

- **Save DateTime To**`TDateTime`: Specify a variable to save the converted DateTime


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

