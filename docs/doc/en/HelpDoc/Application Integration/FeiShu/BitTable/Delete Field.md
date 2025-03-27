---
title: Delete Field
order: 13
---

# Delete Field

## Function Description

:::tip 
Delete fields in the data table
:::

![Delete Field](../../../../assets/Delete%20Field_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: According to the table deletion method, enter the name or ID of the data table

- **Field**`string`: The field to be deleted, enter the field name or field ID according to the field deletion method

- **Table deletion method**`Integer`: You can choose to delete fields using the data table name or data table ID

- **Field deletion method**`Integer`: You can choose to delete fields using field names or field IDs


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

