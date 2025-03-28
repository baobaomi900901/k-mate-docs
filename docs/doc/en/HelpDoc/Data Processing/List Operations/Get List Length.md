---
title: Get List Length
order: 7
---

# Get List Length

## Function Description

:::tip 
This command is used to get the length of a list
:::

![Get List Length](../../../assets/Get%20List%20Length_command.png)

## Configuration Item Description

### General

**Command Input**

- **List**`TList<TObject>`: Enter the list variable


**Command Output**

- **Save List Length To**`Integer`: Specify a variable to save the length of the list

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

