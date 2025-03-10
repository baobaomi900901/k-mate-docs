---
title: Get List Item
order: 5
---

# Get List Item

## Function Description

:::tip 
This command is used to get an item from a specific position in the list
:::

![Get List Item](../../../assets/Get%20List%20Item_command.png)

## Configuration Item Description

### General

**Command Input**

- **List**`TList<String>`: Enter the list variable

- **Item Position**`Integer`: Enter the item position. Counting forwards: the first item is 0, the second item is 1, and so on; counting backwards: the last item is -1, the second to last item is -2, and so on.


**Command Output**

- **Save List Item To**`String`: Specify a variable to save the found list item

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

