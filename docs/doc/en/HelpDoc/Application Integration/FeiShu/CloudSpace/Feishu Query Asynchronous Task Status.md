---
title: Feishu Query Asynchronous Task Status
order: 4
---

# Feishu Query Asynchronous Task Status

## Function Description

:::tip 
Asynchronous task for querying, deleting, or moving folders
:::

![Feishu Query Asynchronous Task Status](../../../../assets/Feishu%20Query%20Asynchronous%20Task%20Status_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Task ID**`String`: Task ID for moving or deleting folders


**Command Output**

- **Status**`String`: The state of asynchronous tasks

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

