---
title: Fill Password Field (Web)
order: 3
---

# Fill Password Field (Web)

## Function Description

:::tip 
Enter a password in the web page's password field
:::

![Fill Password Field (Web)](../../../assets/Fill Password Field (Web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Input a previously obtained or a new web page object created by the 'Open Web Page' function

- **Operation Target**`TTarget`: Select the web element to be operated on

- **Entered Password**`string`: Fill in the password to be entered


**Command Output**

No output for the current command

### Advanced

- **Input Method**`Integer`: Select the input method

- **Key Press Interval (Milliseconds)**`Integer`: The interval time between two key presses

- **Focus Timeout (Milliseconds)**`Integer`: Focus timeout duration

- **Delay Time (Milliseconds)**`Integer`: Time to continue waiting after the command execution is completed

- **Click Element Before Input**`Boolean`: Before the input action, click the element first

- **Mouse Click Position**`Integer`: Supports clicking at specific positions on the element

- **Custom Position**`Integer`: Custom position settings

- **Horizontal Translation**`Integer`: Enter a positive number to move right, a negative number to move left

- **Vertical Translation**`Integer`: Enter a positive number to move down, a negative number to move up

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

- **Timeout (Milliseconds)**`Integer`: Set the maximum wait time


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

