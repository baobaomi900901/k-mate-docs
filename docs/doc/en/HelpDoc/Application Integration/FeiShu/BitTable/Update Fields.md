---
title: Update Fields
order: 12
---

# Update Fields

## Function Description

:::tip 
Update fields in the data table
:::

![Update Fields](../../../../assets/Update%20Fields_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: According to the table update method, enter the name or ID of the data table

- **Field**`string`: Enter the field name or field ID according to the field update method for the field to be updated

- **New field name**`string`: The name of the updated field

- **New field type**`Integer`: The type of the updated field

- **Table update method**`Integer`: You can choose to update fields using either the data table name or data table ID

- **Field update method**`Integer`: You can choose to update fields with field names or field IDs


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

