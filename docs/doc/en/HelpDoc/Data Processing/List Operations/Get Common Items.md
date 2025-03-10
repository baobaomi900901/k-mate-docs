---
title: Get Common Items
order: 16
---

# Get Common Items

## Function Description

:::tip 
This command is used to get the common items from two lists and save the result to a new list
:::

![Get Common Items](../../../assets/Get Common Items_command.png)

## Configuration Item Description

### General

**Command Input**

- **List 1**`TList<String>`: Enter the first list variable

- **List 2**`TList<String>`: Enter the second list variable


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

