---
title: Add View
order: 7
---

# Add View

## Function Description

:::tip 
Add views to the data table
:::

![Add View](../../../../assets/Add%20View_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: According to the addition method, enter the name or ID of the data table

- **View Name**`string`: The name of the view to be added

- **Add method**`Integer`: The addition method can choose to add views using the data table name or data table ID

- **View type**`Integer`: The type of view, please refer to the official website for specific types


**Command Output**

- **View ID**`string`: Added view ID

- **View information**`string`: 

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

