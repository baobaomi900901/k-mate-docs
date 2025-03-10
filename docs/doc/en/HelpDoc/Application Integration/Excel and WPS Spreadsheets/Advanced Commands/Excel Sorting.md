---
title: Excel Sorting
order: 11
---

# Excel Sorting

## Function Description

:::tip 
Perform ascending, descending, or custom sort on specified columns in Excel
:::

![Excel Sorting](../../../../assets/Excel%20Sorting_command.png)

## Configuration Item Description

### General

**Command Input**

- **Excel Instance**`TWorkbookApplication`: Input an Excel instance obtained through 'Open or Create Excel'/'Get currently active Excel instance' function

- **Sort Method**`Integer`: Select the sort method

- **Sort Column**`string`: Enter the column name (supports A or 1), use A,B,C or A:C for multiple columns, -N represents the nth to last column

- **Expand Selected Range**`Boolean`: Expand Selected Range

- **Exclude First Row from Sort**`Boolean`: If checked, the first row will not be included in the sort

- **Custom List**`string`: Custom sequence, such as: Sun, Mon, Tue, Wed, Thu, Fri, Sat

- **Custom Sort Column**`string`: Enter the column name (supports A or 1), use A,B,C or A:C for multiple columns, -N represents the nth to last column

- **Region Type**`Integer`: Select the sort region type

- **Start Row Number**`Integer`: Row number. Starts from 1

- **Start Column Name**`string`: Column name. Starts with A

- **End Row Number**`Integer`: Row number. Starts from 1

- **End Column Name**`string`: Column name. Starts with A

- **Row Number**`Integer`: Row number. Starts from 1

- **Column Name**`string`: Column name. Starts with A

- **Sheet Name**`string`: Worksheet name


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

