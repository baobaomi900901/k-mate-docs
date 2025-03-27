---
title: Update data table
order: 5
---

# Update data table

## Function Description

:::tip 
Update the name of the data table
:::

![Update data table](../../../../assets/Update%20data%20table_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: According to the update method, enter the name or ID of the data table

- **The new name**`string`: The new name for the data table

- **Update method**`Integer`: The update method can choose to use the data table name or data table ID for updating


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

