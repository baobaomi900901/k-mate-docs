---
title: Fill Password Field (Win)
---

# Fill Password Field (Win)

## Function Description

:::tip 
Enter password in the password field in the window
:::

## Configuration Item Description

### General

**Command Input**

- **Entered Password**`string`: Enter the password to be filled in

- **Target Element**`TTarget`: Select the window element to operate on

- **Window Object**`TWinObj`: Enter a captured window object


**Command Output**

No output for the current command

### Advanced

- **Timeout (ms)**`Integer`: Set the maximum wait time

- **Vertical Translation**`Integer`: Enter a positive number to move down, a negative number to move up

- **OoffsetX**`Integer`: 

- **Custom Position**`Integer`: Specify the custom position

- **Mouse Click Position**`Integer`: Supports clicking at the center of the element, a random position within the element's rectangular area, or a custom specified point

- **Click Element Before Input**`Boolean`: Click the element before performing the input action

- **Post-Execution Delay (ms)**`Integer`: Wait time after the command execution completes

- **Focus Timeout (ms)**`Integer`: Focus timeout period

- **Key Press Interval (ms)**`Integer`: Interval time between two key presses

- **Input Method**`Integer`: Select the input method


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

