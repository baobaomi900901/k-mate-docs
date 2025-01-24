---
title: Set ComboBox (win)
---

# Set ComboBox (win)

## Function Description

:::tip 
Set the selected item in the window's ComboBox
:::

## Configuration Item Description

### General

**Command Input**

- **Matching mode`Integer`**: Content matching mode

- **Selection value`string`**: Option content or position

- **Selection method`Integer`**: Choose whether to select by option content or position

- **Target for operation`TTarget`**: Select the window element to operate on

- **Window object`TWinObj`**: Enter a captured window object


**Command Output**

No output for the current command

### Advanced

- **Timeout (milliseconds)`Integer`**: Set the maximum wait time

- **Delay after execution (milliseconds)`Integer`**: Time to continue waiting after command execution


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

