---
title: Get Window Object List
---

# Get Window Object List

## Function Description

:::tip 
Get all window objects that meet the conditions
:::

## Configuration Item Description

### General

**Command Input**

- **Match Using Wildcards**`Boolean`: Match using wildcards

- **Window Title Contains**`string`: Enter characters contained in the window title


**Command Output**

- **Save Window List Object To**`TList<TUiElement>`: The saved window object list


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

