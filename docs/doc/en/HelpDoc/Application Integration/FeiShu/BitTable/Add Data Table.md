---
title: Add Data Table
order: 2
---

# Add Data Table

## Function Description

:::tip 
Add a data table to a multidimensional table
:::

![Add Data Table](../../../../assets/Add%20Data%20Table_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data table name**`string`: The name of the data table to be added to the multidimensional table

- **Default View Name**`string`: The default view name, do not fill in the default table


**Command Output**

- **Table ID**`string`: Added table ID

- **Detailed Table**`string`: Details of the added data table

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

