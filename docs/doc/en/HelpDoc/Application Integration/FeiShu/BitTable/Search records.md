---
title: Search records
order: 15
---

# Search records

## Function Description

:::tip 
Retrieve specified records from the data table
:::

![Search records](../../../../assets/Search%20records_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: Enter the name or ID of the data table

- **Record ID**`string`: Record ID to be retrieved

- **Search Method**`Integer`: You can choose to use the data table name or data table ID to retrieve records


**Command Output**

- **Record details**`string`: Detailed information of the retrieved records in this data table

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

