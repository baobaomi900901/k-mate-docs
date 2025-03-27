---
title: Batch deletion of records
order: 21
---

# Batch deletion of records

## Function Description

:::tip 
Batch delete specified records from the view in the data table
:::

![Batch deletion of records](../../../../assets/Batch%20deletion%20of%20records_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: Enter the name or ID of the data table

- **Method of deletion**`Integer`: You can choose to delete records using the data table name or data table ID

- **Record ID List**`TList<string>`: Enter the list of record IDs to be deleted


**Command Output**

No output for the current command

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

