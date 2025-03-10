---
title: Fill Input Field (win)
order: 5
---

# Fill Input Field (win)

## Function Description

:::tip 
Enter content into the input field in the window
:::

![Fill Input Field (win)](../../assets/Fill%20Input%20Field%20(win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: The obtained window object

- **Target for Operation**`TTarget`: Select the window element to be operated on

- **Input Content**`string`: The content to enter

- **Append Input**`Boolean`: Continue entering after the existing content


**Command Output**

No output for the current command

### Advanced

- **Input Method**`Integer`: Method of input

- **Key Press Interval (ms)**`Integer`: Interval between key presses

- **Focus Timeout (ms)**`Integer`: Focus timeout duration

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Delay After Execution (ms)**`Integer`: Time to continue waiting after command execution

- **Click Element Before Input**`Boolean`: Click the element before the input action

- **Mouse Click Position**`Integer`: Supports clicking at the center of the element, a random position within the element's rectangle, or a custom position manually specified

- **Custom Position**`Integer`: Custom position

- **Horizontal Translation**`Integer`: Positive values move right, negative values move left

- **Vertical Translation**`Integer`: Positive values move down, negative values move up

- **Wait for Element Presence (ms)**`Integer`: Timeout for waiting for the target input field to appear

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

