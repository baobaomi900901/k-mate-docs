---
title: Excel Sorting
---

# Excel Sorting

## Function Description

:::tip 
Perform ascending, descending, or custom sort on specified columns in Excel
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet Name**`string`: Worksheet name

- **Column Name**`string`: Column name. Starts with A

- **Row Number**`Integer`: Row number. Starts from 1

- **End Column Name**`string`: Column name. Starts with A

- **End Row Number**`Integer`: Row number. Starts from 1

- **Start Column Name**`string`: Column name. Starts with A

- **Start Row Number**`Integer`: Row number. Starts from 1

- **Region Type**`Integer`: Select the sort region type

- **Custom Sort Column**`string`: Custom Sort Column

- **Custom Sort Settings**`string`: After completing the custom sort settings in Excel, click here to extract the settings information

- **Exclude First Row from Sort**`Boolean`: If checked, the first row will not be included in the sort

- **Expand Selected Range**`Boolean`: Expand Selected Range

- **Sort Column**`string`: Enter the column name

- **Sort Method**`Integer`: Select the sort method

- **Excel Instance**`TWorkbookApplication`: Input an Excel instance obtained through 'Open or Create Excel'/'Get currently active Excel instance' function


**Command Output**

No output for the current command


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

