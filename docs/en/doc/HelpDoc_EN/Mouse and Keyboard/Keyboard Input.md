---
title: Keyboard Input
---

# Keyboard Input

## Function Description

:::tip 
Send English characters or key commands to the currently active window. To send Chinese characters, use the function [Input Characters]
:::

## Configuration Item Description

### General

**Command Input**

- **Insert Keyboard Symbols`Boolean`**: Insert keyboard symbols

- **Text Content`string`**: Input text content, Chinese characters are not supported


**Command Output**

No output for the current command

### Advanced

- **Delay After Execution (Milliseconds)`Integer`**: Time to wait after the command execution is complete

- **Key Input Interval (Milliseconds)`Integer`**: Time interval between two key presses

- **Input content contains special keys (hotkeys and key special operations)`Boolean`**: Input content contains special keys

- **Force Load US Keyboard`Boolean`**: Switch to English input method

- **Drive Input`Boolean`**: Drive input


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

