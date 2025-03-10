---
title: Drag Element (win)
order: 1
---

# Drag Element (win)

## Function Description

:::tip 
Drag the element to the specified position in the specified window
:::

![Drag Element (win)](../../../assets/Drag%20Element%20(win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: The acquired window object

- **Operation Target**`TTarget`: Select the window element to be operated on

- **Drag Method**`Integer`: Choose the drag method

- **X**`Integer`: The horizontal coordinate of the target position

- **Y**`Integer`: The vertical coordinate of the target position

- **Target Element**`TTarget`: Select the target element


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Delay Time (ms)**`Integer`: The time to continue waiting after the instruction is executed

- **Mouse Button Down Element Part**`Integer`: Drag element position

- **Movement Speed**`Integer`: Speed of mouse movement

- **Mouse Button Release Element Part**`Integer`: Drag element position

- **Custom**`Integer`: Custom Position

- **Horizontal Panning**`Integer`: Enter a positive number to move right, a negative number to move left

- **Vertical Panning**`Integer`: Enter a positive number to move down, a negative number to move up

- **Wait for Element to Exist (ms)**`Integer`: Timeout for waiting for the element to exist

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

