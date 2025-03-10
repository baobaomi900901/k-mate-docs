---
title: Fill Password Field (Win)
order: 3
---

# Fill Password Field (Win)

## Function Description

:::tip 
Enter password in the password field in the window
:::

![Fill Password Field (Win)](../../../assets/Fill%20Password%20Field%20(Win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: Enter a captured window object

- **Target Element**`TTarget`: Select the window element to operate on

- **Entered Password**`string`: Enter the password to be filled in


**Command Output**

No output for the current command

### Advanced

- **Input Method**`Integer`: Select the input method

- **Key Press Interval (ms)**`Integer`: Interval time between two key presses

- **Focus Timeout (ms)**`Integer`: Focus timeout period

- **Post-Execution Delay (ms)**`Integer`: Wait time after the command execution completes

- **Click Element Before Input**`Boolean`: Click the element before performing the input action

- **Mouse Click Position**`Integer`: Supports clicking at the center of the element, a random position within the element's rectangular area, or a custom specified point

- **Custom Position**`Integer`: Specify the custom position

- **Horizontal Translation**`Integer`: Enter a positive number to move right, a negative number to move left

- **Vertical Translation**`Integer`: Enter a positive number to move down, a negative number to move up

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Timeout (ms)**`Integer`: Set the maximum wait time

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

