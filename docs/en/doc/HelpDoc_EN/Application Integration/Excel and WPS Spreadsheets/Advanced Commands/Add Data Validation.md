---
title: Add Data Validation
---

# Add Data Validation

## Function Description

:::tip 
Add Data Validation
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet Name**`string`: Worksheet name

- **Column Name**`string`: Column name. Start from A

- **Row Number**`Integer`: Row number. Start from 1

- **End Column Name**`string`: Column name. Start from A

- **End Row Number**`Integer`: Row number. Start from 1

- **Start Column Name**`string`: Column name. Start from A

- **Start Row Number**`Integer`: Row number. Start from 1

- **Unit Column Name**`string`: Column name. Start from A

- **Unit Row Number**`Integer`: Row number. Start from 1

- **Region Type**`Integer`: Select the range for data validation

- **Formula**`string`: Formula

- **End Time**`string`: End Time

- **Start Time**`string`: Start Time

- **End Date**`string`: End Date

- **Start Date**`string`: Start Date

- **Source**`string`: Source

- **Maximum Value**`Integer`: Maximum Value

- **Minimum Value**`Integer`: Minimum Value

- **Data Type**`Integer`: Select data calculation method

- **Provide Dropdown Arrow**`Boolean`: Provide Dropdown Arrow

- **Ignore Null Values**`Boolean`: If checked, null values will be ignored

- **Allow Type**`Integer`: Allow Type

- **Excel Instance**`TWorkbookApplication`: Enter an Excel instance obtained by the functions 'Open or New Excel'/'Get Active Excel Instance'


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

