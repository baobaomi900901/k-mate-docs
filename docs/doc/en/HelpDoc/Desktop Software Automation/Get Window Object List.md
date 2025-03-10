---
title: Get Window Object List
order: 2
---

# Get Window Object List

## Function Description

:::tip 
Get all window objects that meet the conditions
:::

![Get Window Object List](../../assets/Get%20Window%20Object%20List_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Title Contains**`string`: Enter characters contained in the window title

- **Match Using Wildcards**`Boolean`: Match using wildcards


**Command Output**

- **Save Window List Object To**`TList<TUiElement>`: The saved window object list

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

