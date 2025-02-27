---
title: Create Data Table
---

# Create Data Table

## Function Description

:::tip 
Create a data table (2D table)
:::

## Configuration Item Description

### General

**Command Input**

- **Print Output Variable Value of the Component**`Boolean`: After checking, the variable data or variable values generated by the component will be output and printed to the console log output

- **Data Type**`Integer`: Specify the data type for the entire data table

- **Sheet Name**`string`: Sheet name

- **File Path**`string`: Enter or select the file path

- **Content to Write**`string`: Supports two-dimensional list data and dictionaries, example: [["a","b","c"],[1,2,3]], {"Name":["Tom","Jack","Steve","Ricky"],"Age":[28,34,29,42]}

- **Creation Method**`Integer`: Method of creating the data table


**Command Output**

- **Save Data Table To**`TDataTable`: Specify a variable to save the data table

### Advanced

- **Optional Parameters**`string`: You can input corresponding parameters for pandas DataFrame(), read_excel(), read_csv() methods. Supports passing a dictionary.

- **Encoding Format**`Integer`: If the data appears with garbled characters, set the encoding format. Generally use utf-8 for Excel files and gb18030 for CSV files.

- **Number of Rows to Read**`Integer`: The number of rows to read

- **Specify Row Start**`Integer`: Specify the starting row position for reading. The default value is empty, indicating that reading starts from the first row.

- **Specify Column Names**`string`: Generally used when Excel lacks column names or needs to redefine column names. The length of names must be equal to the number of columns in the Excel table, otherwise an error will occur.


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

