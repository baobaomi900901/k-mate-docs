---
title: Write Data to CSV
order: 2
---

# Write Data to CSV

## Function Description

:::tip 
Write data to a CSV file
:::

![Write Data to CSV](../../../assets/Write%20Data%20to%20CSV_command.png)

## Configuration Item Description

### General

**Command Input**

- **CSV File Path**`string`: Enter the path to the CSV file

- **File Encoding**`Integer`: Select the text encoding format

- **Write Method**`Integer`: Select the write method

- **Data Table**`TDataTable`: Enter the data table to be written to the CSV file


**Command Output**

No output for the current command

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

