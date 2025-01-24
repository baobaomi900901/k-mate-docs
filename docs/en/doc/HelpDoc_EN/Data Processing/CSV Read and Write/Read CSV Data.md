---
title: Read CSV Data
---

# Read CSV Data

## Function Description

:::tip 
Read the content of a CSV file
:::

## Configuration Item Description

### General

**Command Input**

- **First Row is Column Header**`Boolean`: Is the first row of the CSV file a column header?

- **Content Delimiter**`Integer`: Select the content delimiter, default is comma

- **File Encoding**`Integer`: Select the text encoding format, UTF-8-SIG is UTF-8 with BOM

- **CSV File Path**`string`: Enter the path to the CSV file


**Command Output**

- **Save Data Table To**`TDataTable`: Specify a variable to save the read data table


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

