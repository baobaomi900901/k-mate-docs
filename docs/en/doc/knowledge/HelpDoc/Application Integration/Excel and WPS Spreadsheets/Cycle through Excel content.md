---
title: Cycle through Excel content
---

# Cycle through Excel content

## Function Description

:::tip 
Cycle through the content of an Excel object and save the loop items
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet name**`string`: If left blank, the currently active sheet will be used by default

- **Ending column name**`string`: Ending column name, starting from A

- **Starting column name**`string`: Starting column name, starting from A

- **Ending row number**`Integer`: Ending row number, starting from 1

- **Starting row number**`Integer`: Starting row number, starting from 1

- **Cycle mode**`Integer`: Cycle through consecutive rows or columns

- **Excel object**`TWorkbookApplication`: Enter an Excel object obtained through the functions 'Open or create a new Excel'/'Get the currently active Excel object'


**Command Output**

- **Save the current column name to**`string`: Specify a variable to save the column name of the Excel loop item

- **Save the current row number to**`Integer`: Specify a variable to save the row number of the Excel loop item

- **Save the current loop item to**`TList<String>`: Specify a variable to save the Excel loop item

### Advanced

- **Remove leading and trailing spaces from cells**`Boolean`: If checked, leading and trailing spaces in the read content will be automatically removed

- **Columns to display content**`string`: Display visible content. Separate multiple columns with commas

- **Read the displayed content of cells**`Boolean`: If not checked, integers will be read as decimals (1 = 1.0)


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

