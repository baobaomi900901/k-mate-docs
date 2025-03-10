---
title: Modify List Item
order: 4
---

# Modify List Item

## Function Description

:::tip 
This command is used to modify the value of an item at a specific position in the list
:::

![Modify List Item](../../../assets/Modify%20List%20Item_command.png)

## Configuration Item Description

### General

**Command Input**

- **List**`TList<String>`: Enter the list variable

- **Item Position**`Integer`: Enter the index of the item position. Counting forwards: the first item is 0, the second item is 1, and so on; counting backwards: the last item is -1, the second to last item is -2, and so on.

- **New Item Value**`String`: The new value to be modified


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

