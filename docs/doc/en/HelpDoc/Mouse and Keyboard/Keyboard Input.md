---
title: Keyboard Input
order: 1
---

# Keyboard Input

## Function Description

:::tip 
Send English characters or key commands to the currently active window. To send Chinese characters, use the function [Input Characters]
:::

![Keyboard Input](../../assets/Keyboard%20Input_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text Content**`string`: Input text content, Chinese characters are not supported

- **Insert Keyboard Symbols**`Boolean`: Insert keyboard symbols


**Command Output**

No output for the current command

### Advanced

- **Input content contains special keys (hotkeys and key special operations)**`Boolean`: Input content contains special keys

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Delay After Execution (Milliseconds)**`Integer`: Time to wait after the command execution is complete

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

