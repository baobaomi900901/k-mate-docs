---
title: Delete Duplicate Rows
---

# Delete Duplicate Rows

## Function Description

:::tip 
Delete duplicate row data from the specified column or the entire table of the data table object.
:::

## Configuration Item Description

### General

**Command Input**

- **Print Component Output Value**`Boolean`: When checked, the variable data or value generated by the component will be output and printed to the console log.

- **Preview in Data Table**`Boolean`: Preview in Data Table

- **Deletion Mode**`Integer`: When duplicate rows are detected, you can choose to keep the first row, keep the last row, or delete all.

- **Specified Column Number**`Integer`: When all selected column data are identical, they will be deleted. Enter the column number that needs to be converted to a different data type. An empty input indicates converting the entire table. For a single column, enter [1]. For multiple columns, enter [1,2,3]

- **Specified Column Name**`string`: When all selected column data are identical, they will be deleted. Enter the column that needs to be converted to a different data type. An empty input indicates converting the entire table. For a single column, enter ['A']. For multiple columns, enter ['A','B','C']

- **Deletion Method**`Integer`: Deletion Method

- **Data Table Object**`TDataTable`: You can use the variable returned by the 'Create Data Table' component.


**Command Output**

- **Data After Deletion**`TDataTable`: Used to store the data table after deleting duplicates.


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

