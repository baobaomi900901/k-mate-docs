---
title: Set Window State
order: 3
---

# Set Window State

## Function Description

:::tip 
Perform operations to restore, maximize, or minimize a window
:::

![Set Window State](../../../assets/Set%20Window%20State_command.png)

## Configuration Item Description

### General

**Command Input**

- **Method of Getting Window**`Integer`: Select the method to get the window

- **Window Object**`TWinObj`: The window object obtained

- **Operation Target**`TTarget`: Select window element

- **Window Title**`string`: Enter window title

- **Add Window Type**`Boolean`: Add window type

- **Window Class Name**`string`: Enter window class name

- **Match by Wildcard**`Boolean`: Match by wildcard

- **Window State to Set**`Integer`: Set the window state


**Command Output**

No output for the current command

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

