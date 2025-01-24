---
title: Fill Input Field (win)
---

# Fill Input Field (win)

## Function Description

:::tip 
Enter content into the input field in the window
:::

## Configuration Item Description

### General

**Command Input**

- **Append Input**`Boolean`: Continue entering after the existing content

- **Input Content**`string`: The content to enter

- **Target for Operation**`TTarget`: Select the window element to be operated on

- **Window Object**`TWinObj`: The obtained window object


**Command Output**

No output for the current command

### Advanced

- **TimeOut**`Integer`: 

- **Vertical Translation**`Integer`: Positive values move down, negative values move up

- **OoffsetX**`Integer`: 

- **Custom Position**`Integer`: Custom position

- **Mouse Click Position**`Integer`: Supports clicking at the center of the element, a random position within the element's rectangle, or a custom position manually specified

- **Click Element Before Input**`Boolean`: Click the element before the input action

- **Delay After Execution (ms)**`Integer`: Time to continue waiting after command execution

- **Focus Timeout (ms)**`Integer`: Focus timeout duration

- **Key Press Interval (ms)**`Integer`: Interval between key presses

- **Force Load American Keyboard (ENG)**`Boolean`: Switch to English input method

- **Input Contains Shortcuts**`Boolean`: Incorporate shortcuts in the content

- **Input Method**`Integer`: Method of input


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

