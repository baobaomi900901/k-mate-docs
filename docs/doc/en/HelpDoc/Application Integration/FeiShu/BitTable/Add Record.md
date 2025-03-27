---
title: Add Record
order: 16
---

# Add Record

## Function Description

:::tip 
Add records to the data table
:::

![Add Record](../../../../assets/Add%20Record_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: Enter the name or ID of the data table

- **Record details**`string`: Enter the details of the record in the format of {column name: value}

- **Add method**`Integer`: You can choose to add records using the data table name or data table ID


**Command Output**

- **Record ID**`string`: ID of added record

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

