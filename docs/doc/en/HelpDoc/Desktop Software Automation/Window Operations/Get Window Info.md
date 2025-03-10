---
title: Get Window Info
order: 1
---

# Get Window Info

## Function Description

:::tip 
Get window text content, process, title, and other information
:::

![Get Window Info](../../../assets/Get Window Info_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Retrieval Method**`Integer`: Select the window retrieval method

- **Window Object**`TWinObj`: Enter a window object

- **Operation Target**`TTarget`: Select a window element

- **Window Title**`string`: Enter the window title

- **Add Window Type**`Boolean`: Add window type

- **Window Type**`string`: Enter the window type

- **Match by Wildcard**`Boolean`: Match by wildcard

- **Window Handle**`Integer`: Enter a window handle

- **Operation**`Integer`: Window operation mode


**Command Output**

- **Save Window Info To**`string`: The saved window property object

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

