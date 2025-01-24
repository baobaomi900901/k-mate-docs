---
title: ForEach list loop
---

# ForEach list loop

## Function Description

:::tip 
Loop through each item in the list for automation operations
:::

## Configuration Item Description

### General

**Command Input**

- **Output loop item position**`Boolean`: Whether to output the position of the loop item

- **List**`TObject`: Input a list


**Command Output**

- **Store loop item to**`Variant`: Specify a variable name to store the current loop item

- **Store current loop position to**`Integer`: Specify a variable name to store the current loop item's position

### Advanced

- **Loop end position**`Integer`: The ending position of the loop, -1 indicates the last item, and the result includes the item at the end position

- **Loop start position**`Integer`: The starting position of the loop, 0 indicates the first item


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

