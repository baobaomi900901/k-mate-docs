---
title: Open Data Table Dialog
---

# Open Data Table Dialog

## Function Description

:::tip 
Open Data Table Dialog
:::

## Configuration Item Description

### General

**Command Input**

- **Description**`string`: Provide a description of how to use the data table, making it easier for users to understand

- **Dialog Title**`string`: Dialog Title


**Command Output**

- **Button Name**`string`: Specify a variable name to save the name of the clicked button


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

