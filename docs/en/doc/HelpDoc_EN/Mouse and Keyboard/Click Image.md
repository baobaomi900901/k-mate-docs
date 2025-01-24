---
title: Click Image
---

# Click Image

## Function Description

:::tip 
Click Image
:::

## Configuration Item Description

### General

**Command Input**

- **Click Method`Integer`**: Single click or double click

- **Mouse`Integer`**: Choose the mouse button used to trigger the click

- **Vertical Translation`Integer`**: Enter a positive number to move down, negative to move up

- **Horizontal Translation`Integer`**: Enter a positive number to move right, negative to move left

- **Custom`Integer`**: Custom Position

- **Target Image Part`Integer`**: Choose the part of the target image to click

- **Target Image`string`**: You can select multiple images to search in sequence until any matching image is found within the timeout period and clicked

- **sAllImages`string`**: 

- **Window Object`TWinObj`**: Please select the window object

- **Search Range`Integer`**: Search Range


**Command Output**

No output for the current command

### Advanced

- **Delay After Execution (milliseconds)`Integer`**: Time to wait after the command is executed

- **Timeout (milliseconds)`Integer`**: Set the maximum wait time

- **Show Mouse Movement Path`Boolean`**: Whether to show the mouse movement path

- **Keyboard Modifier Keys`Integer`**: The keyboard function keys that need to be pressed


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

