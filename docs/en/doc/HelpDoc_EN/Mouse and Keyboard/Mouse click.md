---
title: Mouse click
---

# Mouse click

## Function Description

:::tip 
Actions like mouse press, release, single-click, double-click, and right-click are available.
:::

## Configuration Item Description

### General

**Command Input**

- **Move speed`Integer`**: Speed of mouse movement

- **Move mouse to Y`Integer`**: Relative vertical coordinate

- **Move mouse to X`Integer`**: Relative horizontal coordinate

- **Relative to`Integer`**: Mouse position

- **Move the mouse to a specified position before clicking`Boolean`**: Move the mouse to a specified position before clicking

- **Click type`Integer`**: Single-click or double-click

- **Mouse button`Integer`**: Select the mouse button to trigger the click


**Command Output**

No output for the current command

### Advanced

- **Delay after execution (milliseconds)`Integer`**: Time to wait after the instruction is executed

- **Keyboard auxiliary buttons`Integer`**: Required keyboard function keys

- **Hardware-driven click`Boolean`**: Click using hardware drivers


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

