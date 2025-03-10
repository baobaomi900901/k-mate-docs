---
title: Remove Object from List
order: 9
---

# Remove Object from List

## Function Description

:::tip 
This command is used to remove a specified item from an object list
:::

![Remove Object from List](../../../assets/Remove%20Object%20from%20List_command.png)

## Configuration Item Description

### General

**Command Input**

- **List**`TList<TObject>`: Enter the object list variable

- **Removal Method**`Integer`: Select whether to remove by index or by object

- **Object to Remove**`TObject`: Enter the object to be removed

- **Position to Remove**`Integer`: Enter the position to remove. Counting forwards: the first item is 0, the second item is 1, and so on; counting backwards: the last item is -1, the second to last item is -2, and so on.


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

