---
title: Merge Lists
order: 13
---

# Merge Lists

## Function Description

:::tip 
This command is used to merge two lists
:::

![Merge Lists](../../../assets/Merge%20Lists_command.png)

## Configuration Item Description

### General

**Command Input**

- **List 1**`TList<String>`: Enter the first list variable

- **List 2**`TList<String>`: Enter the second list variable


**Command Output**

- **Save Merged List To**`TList<String>`: Enter a name to save the merged list

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

