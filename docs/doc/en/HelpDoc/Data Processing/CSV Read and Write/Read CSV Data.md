---
title: Read CSV Data
order: 1
---

# Read CSV Data

## Function Description

:::tip 
Read the content of a CSV file
:::

![Read CSV Data](../../../assets/Read CSV Data_command.png)

## Configuration Item Description

### General

**Command Input**

- **CSV File Path**`string`: Enter the path to the CSV file

- **File Encoding**`Integer`: Select the text encoding format, UTF-8-SIG is UTF-8 with BOM

- **Content Delimiter**`Integer`: Select the content delimiter, default is comma

- **First Row is Column Header**`Boolean`: Is the first row of the CSV file a column header?


**Command Output**

- **Save Data Table To**`TDataTable`: Specify a variable to save the read data table

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

