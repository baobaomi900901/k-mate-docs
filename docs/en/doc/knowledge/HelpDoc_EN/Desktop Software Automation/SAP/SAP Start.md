---
title: SAP Start
---

# SAP Start

## Function Description

:::tip 
Start SAP
:::

## Configuration Item Description

### General

**Command Input**

- **Retry Interval**`Integer`: Retry interval

- **Retry Number**`Integer`: Number of retries

- **Connection Name**`string`: The connection name used for SAP login

- **SAP Launch Path**`string`: The path where the SAP launch program is located


**Command Output**

- **SAP Login Window**`TUiElement`: Specify a variable to save the SAP login window


**Command Output**

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

