---
title: Click Text (OCR)
order: 10
---

# Click Text (OCR)

## Function Description

:::tip 
Search and click the given text in UI elements. Install the Text Plugin or OCR Plugin from the Plugin Center before using.
:::

![Click Text (OCR)](../../assets/Click Text (OCR)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text**`string`: Enter the text to be clicked

- **Recognition Method**`Integer`: Select a recognition method. The Text recognition method requires the Text Plugin to be installed; the OCR recognition method requires the OCR Plugin to be installed.

- **Target**`TTarget`: Select the target for the operation

- **Click Type**`Integer`: Specify the type of mouse click to simulate (Single Click, Double Click, Scroll Up, Scroll Down). Single Click is selected by default.

- **Mouse Button**`Integer`: Select the mouse button to trigger the click


**Command Output**

No output for the current command

### Advanced

- **Occurrence**`Integer`: Indicates how many times the text appears in the UI element

- **Send Window Messages**`Boolean`: If checked, the click will be executed by sending specific messages to the target application. This input method is faster and works in the background. By default, this checkbox is unchecked. If unchecked, the default method uses hardware drivers to execute the click, which is slower but compatible with all desktop applications.

- **Modifier Keys**`Integer`: Select modifier keys

- **Position of Target Text**`Integer`: Supports clicking at the center of the element (the center of the element's rectangle), random position (automatically selects a point within the element's rectangle), or custom position (manually specify the target point).

- **Custom**`Integer`: Custom position

- **Horizontal Offset**`Integer`: Enter a positive number to move to the right, a negative number to move to the left

- **Vertical Offset**`Integer`: Enter a positive number to move downward, a negative number to move upward

- **Timeout (Milliseconds)**`Integer`: Set the maximum wait time

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Delay After Execution (Milliseconds)**`Integer`: Time to wait after the command execution is completed


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

