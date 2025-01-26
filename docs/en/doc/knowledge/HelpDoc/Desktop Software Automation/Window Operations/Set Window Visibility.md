---
title: Set Window Visibility
---

# Set Window Visibility

## Function Description

:::tip 
Set window visibility or hide state
:::

## Configuration Item Description

### General

**Command Input**

- **Window Visibility**`Integer`: Set the visibility of the window

- **Window Handle**`Integer`: Input a window handle

- **Match Using Wildcards**`Boolean`: Match using wildcards

- **Window Type**`string`: Input the window type

- **Add Window Type**`Boolean`: Add window type

- **Window Title**`string`: Input the window title

- **Operation Target**`TTarget`: Select a window element

- **Window Object**`TWinObj`: Input a captured window object

- **Get Window Method**`Integer`: Select the method to get the window


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

