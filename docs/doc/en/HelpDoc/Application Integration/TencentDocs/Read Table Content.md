---
title: Read Table Content
order: 3
---

# Read Table Content

## Function Description

:::tip 
Read the text content of the specified area in the table
:::

![Read Table Content](../../../assets/Read%20Table%20Content_command.png)

## Configuration Item Description

### General

**Command Input**

- **Document**`TDocument`: 

- **Pattern**`Integer`: Read mode：Cell，Row，Column，Region

- **Region**`string`: Area for reading data，format：Cell：A1；Row：1；Column：A，Region：A1:B2


**Command Output**

- **DataTable**`TDataTable`: 

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

