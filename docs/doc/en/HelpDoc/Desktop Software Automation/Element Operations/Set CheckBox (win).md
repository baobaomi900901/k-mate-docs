---
title: Set CheckBox (win)
order: 5
---

# Set CheckBox (win)

## Function Description

:::tip 
Set the state of the check box in the window to checked or unchecked
:::

![Set CheckBox (win)](../../../assets/Set CheckBox (win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window object**`TWinObj`: Enter a captured window object

- **Operation target**`TTarget`: Select the window element to operate on

- **Operation**`Integer`: Operation for the check box


**Command Output**

No output for the current command

### Advanced

- **Delay after execution (milliseconds)**`Integer`: Time to continue waiting after command execution

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Wait for element to exist (milliseconds)**`Integer`: Timeout for waiting for the target check box to exist


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

