---
title: Keep Duplicate Items
order: 17
---

# Keep Duplicate Items

## Function Description

:::tip 
This feature will return a new list that only retains duplicate elements.
:::

![Keep Duplicate Items](../../../assets/Keep Duplicate Items_command.png)

## Configuration Item Description

### General

**Command Input**

- **List**`TList<String>`: Enter the list variable

- **Keep Way**`Integer`: You can choose to keep only the first occurrence of duplicate items or all duplicate items.


**Command Output**

- **Save List Object To**`TList<String>`: Specify a variable to save the new list


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

