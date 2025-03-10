---
title: Filter List
order: 10
---

# Filter List

## Function Description

:::tip 
This command is used to remove all items in list 2 from list 1 and save the result to a new list
:::

![Filter List](../../../assets/Filter%20List_command.png)

## Configuration Item Description

### General

**Command Input**

- **List 1**`TList<String>`: The list that needs to be filtered

- **List 2**`TList<String>`: The list containing items to be removed from List 1


**Command Output**

- **Save List Object To**`TList<String>`: Specify a variable to save the filtered new list

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

