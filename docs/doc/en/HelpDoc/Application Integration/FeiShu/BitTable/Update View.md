---
title: Update View
order: 9
---

# Update View

## Function Description

:::tip 
Update view names in the data table
:::

![Update View](../../../../assets/Update%20View_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: According to the table update method, enter the name or ID of the data table

- **View**`string`: The view to be updated, pass in the view name or ID according to the view deletion method

- **New View Name**`string`: Enter a new view name

- **Table update method**`Integer`: You can choose to update the view using the data table name or data table ID

- **View update method**`Integer`: You can choose to update the view using either the view name or view ID


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

