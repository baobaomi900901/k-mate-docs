---
title: Set ComboBox (win)
order: 4
---

# Set ComboBox (win)

## Function Description

:::tip 
Set the selected item in the window's ComboBox
:::

![Set ComboBox (win)](../../../assets/Set%20ComboBox%20(win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window object**`TWinObj`: Enter a captured window object

- **Target for operation**`TTarget`: Select the window element to operate on

- **Selection method**`Integer`: Choose whether to select by option content or position

- **Selection value**`string`: Option content or position

- **Matching mode**`Integer`: Content matching mode


**Command Output**

No output for the current command

### Advanced

- **Delay after execution (milliseconds)**`Integer`: Time to continue waiting after command execution

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Timeout (milliseconds)**`Integer`: Set the maximum wait time

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

