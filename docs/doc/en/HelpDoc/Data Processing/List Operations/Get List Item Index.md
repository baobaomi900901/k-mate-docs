---
title: Get List Item Index
---

# Get List Item Index

## Function Description

:::tip 
Retrieve the position of a specified item in the list, with list positions starting from 0, where 0 is the first item, 1 is the second item, and so on
:::

## Configuration Item Description

### General

**Command Input**

- **Specified Item Value**`String`: Enter the value of the specified item in the list

- **List**`TList<String>`: Enter the list variable


**Command Output**

- **Save Position To**`Integer`: Specify a variable to save the position of the found specified item in the list


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

