---
title: Insert Item to List
---

# Insert Item to List

## Function Description

:::tip 
Insert an item at a specific position in the list
:::

## Configuration Item Description

### General

**Command Input**

- **Item Content**`String`: Enter the content of the item to be inserted

- **Insert At:**`Integer`: Enter the position where the item will be inserted. Positive counting: The first item is 0, the second item is 1, and so on; Negative counting: The last item is -1, the second to last item is -2, and so on. After insertion, the original items will be moved backwards

- **Insert Method**`Integer`: Append a new item at the end or insert it at a specific position in the list

- **List**`TList<String>`: Enter the list variable


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

