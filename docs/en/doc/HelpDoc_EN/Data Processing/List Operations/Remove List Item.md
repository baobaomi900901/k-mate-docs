---
title: Remove List Item
---

# Remove List Item

## Function Description

:::tip 
This command is used to remove a specified item from the list
:::

## Configuration Item Description

### General

**Command Input**

- **Position to Remove**`Integer`: Enter the position to remove. Counting forwards: the first item is 0, the second item is 1, and so on; counting backwards: the last item is -1, the second to last item is -2, and so on.

- **Content to Remove**`String`: Enter the content to be removed

- **Removal Method**`Integer`: Select the removal method. For example, in 'helloworld', if you want to remove the first 'o' (at position 4), select 'By Index' and enter 4 (index starts from 0); to remove all 'o's, select 'By Content' and enter the letter 'o'

- **List**`TList<String>`: Enter the list variable


**Command Output**

No output for the current command


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

