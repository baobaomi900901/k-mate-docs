---
title: Add Field
order: 11
---

# Add Field

## Function Description

:::tip 
Add fields to the data table
:::

![Add Field](../../../../assets/Add%20Field_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: According to the addition method, enter the name or ID of the data table

- **Field name**`string`: The name of the field to be added

- **Field Description**`string`: To add description information for the field

- **Add method**`Integer`: The addition method can choose to add fields using the data table name or data table ID

- **Field type**`Integer`: The type of field, please refer to the official website for specific types


**Command Output**

- **Field ID**`string`: Unique identifier of the added field

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

