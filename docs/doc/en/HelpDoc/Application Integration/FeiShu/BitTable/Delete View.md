---
title: Delete View
order: 8
---

# Delete View

## Function Description

:::tip 
Delete View from Data Table
:::

![Delete View](../../../../assets/Delete%20View_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: According to the table deletion method, enter the name or ID of the data table

- **View**`string`: The view to be deleted, pass in the view name or ID according to the method of view deletion

- **Table deletion method**`Integer`: You can choose to delete the view using the data table name or data table ID

- **View deletion method**`Integer`: You can choose to delete a view using either the view name or view ID


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

