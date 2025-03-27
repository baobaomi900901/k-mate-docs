---
title: List the data table
order: 3
---

# List the data table

## Function Description

:::tip 
List information for multidimensional tables
:::

![List the data table](../../../../assets/List%20the%20data%20table_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection


**Command Output**

- **List of Data Table IDs**`TList<string>`: List for storing data table IDs

- **List of Data Table Names**`TList<string>`: List of data table names for storage

- **Data Table Details**`string`: Details of the data table

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

