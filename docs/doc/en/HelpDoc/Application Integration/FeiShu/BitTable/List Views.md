---
title: List Views
order: 6
---

# List Views

## Function Description

:::tip 
List the view information of the data table
:::

![List Views](../../../../assets/List%20Views_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: According to the listing method, enter the name or ID of the data table

- **List Method**`Integer`: List views using either table name or table ID


**Command Output**

- **View ID List**`TList<string>`: List for storing view IDs

- **List of View Names**`TList<string>`: List of View Names for Storage

- **View Details**`string`: Detailed information of views in this data table

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

