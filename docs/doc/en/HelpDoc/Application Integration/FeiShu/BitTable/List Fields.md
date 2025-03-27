---
title: List Fields
order: 10
---

# List Fields

## Function Description

:::tip 
List the field information of the data table
:::

![List Fields](../../../../assets/List%20Fields_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: According to the listing method, enter the name or ID of the data table

- **List Method**`Integer`: The listing method can choose to list fields using either the data table name or the data table ID


**Command Output**

- **Field ID List**`TList<string>`: List for storing field IDs

- **Field Name List**`TList<string>`: List for storing field names

- **Field Details**`string`: The detailed information of the fields in this data table

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

