---
title: Handling Missing Values
order: 10
---

# Handling Missing Values

## Function Description

:::tip 
Fill missing values (NaN) in the data table with a fixed value, fill with the previous value, fill with the next value, or delete missing values.
:::

![Handling Missing Values](../../../assets/Handling%20Missing%20Values_command.png)

## Configuration Item Description

### General

**Command Input**

- **Data Table Object**`TDataTable`: The variable returned by the 'Create Data Table' component can be used.

- **Missing Value Type**`Integer`: Process specified missing value types, including NaN, None, and empty strings.

- **Processing Area**`Integer`: Processing Area

- **Row/Column Name/Number**`Integer`: Row/Column Name/Number

- **Row Name**`string`: Supports single or multiple rows, an empty value indicates the entire table. Example: [1], [1,2,3]. The default row name is the first element of each row in the data table.

- **Column Name**`string`: Supports single or multiple columns, an empty value indicates the entire table. Example: ['A'], ['A','B','C']

- **Row Number**`string`: Supports single or multiple rows, an empty value indicates the entire table. Example: [1], [1,2,3]

- **Column Number**`string`: Supports single or multiple columns, an empty value indicates the entire table. Example: [1], [1,2,3]

- **Method of Handling**`Integer`: Supports filling missing values with a specified value, filling with the previous value (previous row/column), filling with the next value (next row/column), or deleting the row/column where the missing value exists.

- **Fill Value**`string`: Fill all missing values with the specified value.

- **Deletion Condition**`Integer`: Supports deleting the row/column if there is a missing value in the specified row/column, or only deleting the row/column if all values in the specified row/column are missing values.

- **Preview in Data Table**`Boolean`: Preview in Data Table

- **Print Component's Output Variable Value**`Boolean`: After checking, the component will output the generated variable data or variable value and print it to the console output log.


**Command Output**

- **Result After Handling**`TDataTable`: The data table after handling the missing values.

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

