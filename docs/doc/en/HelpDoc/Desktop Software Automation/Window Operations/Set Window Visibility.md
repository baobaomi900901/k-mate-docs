---
title: Set Window Visibility
order: 4
---

# Set Window Visibility

## Function Description

:::tip 
Set window visibility or hide state
:::

![Set Window Visibility](../../../assets/Set%20Window%20Visibility_command.png)

## Configuration Item Description

### General

**Command Input**

- **Get Window Method**`Integer`: Select the method to get the window

- **Window Object**`TWinObj`: Input a captured window object

- **Operation Target**`TTarget`: Select a window element

- **Window Title**`string`: Input the window title

- **Add Window Type**`Boolean`: Add window type

- **Window Type**`string`: Input the window type

- **Match Using Wildcards**`Boolean`: Match using wildcards

- **Window Visibility**`Integer`: Set the visibility of the window


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

