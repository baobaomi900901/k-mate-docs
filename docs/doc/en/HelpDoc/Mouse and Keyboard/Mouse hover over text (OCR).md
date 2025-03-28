---
title: Mouse hover over text (OCR)
order: 11
---

# Mouse hover over text (OCR)

## Function Description

:::tip 
Search for and hover the mouse over the specified text in a UI element. Before use, you need to install the text or OCR plugin from the Plugin Center.
:::

![Mouse hover over text (OCR)](../../assets/Mouse%20hover%20over%20text%20(OCR)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text**`string`: The text to hover over

- **Recognition method**`Integer`: Select the recognition method. The text recognition method requires the text plugin to be installed, and the OCR recognition method requires the OCR plugin to be installed.

- **Target**`TTarget`: Target element


**Command Output**

No output for the current command

### Advanced

- **Occurrence count**`Integer`: The number of times the text appears in the UI element

- **Send window messages**`Boolean`: If this checkbox is selected, hovering is performed by sending a specific message to the target application. This input method is faster and works in the background. By default, this checkbox is unchecked. If unchecked, the default method performs the hover using hardware drivers, which is the slowest method and cannot work in the background but is compatible with all desktop applications.

- **Target text position**`Integer`: Supports clicking the center of the element (center of the element's rectangular area), a random position (randomly specified point within the element's rectangular area), or a custom position (manually specified target point).

- **Custom**`Integer`: Custom position

- **Horizontal offset**`Integer`: Enter a positive number to move right, a negative number to move left.

- **Vertical offset**`Integer`: Enter a positive number to move down, a negative number to move up.

- **Timeout (milliseconds)**`Integer`: Maximum waiting time

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Delay after execution (milliseconds)**`Integer`: Time to continue waiting after the instruction is executed.

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

