---
title: Terminate Process
---

# Terminate Process

## Function Description

:::tip 
Used to terminate a running program
:::

## Configuration Item Description

### General

**Command Input**

- **Process ID**`Integer`: ID of the process to be terminated

- **Process Name**`string`: Name of the process to be terminated

- **Termination Method**`Integer`: Choose whether to terminate the process by process ID or process name


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

