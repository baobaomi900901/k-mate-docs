---
title: Get Element Info (Win)
order: 2
---

# Get Element Info (Win)

## Function Description

:::tip 
Get the text content, attributes, value, and position of a specified element in the window
:::

![Get Element Info (Win)](../../../assets/Get%20Element%20Info%20(Win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: Enter a captured window object

- **Operation Target**`TTarget`: Select the desktop software element to operate on

- **Operation**`Integer`: Window Element Information

- **Attribute Name**`string`: Element Attribute Name

- **Relative To**`Integer`: Position in the screen


**Command Output**

- **Save Element Info To**`string`: Save the captured window element information

### Advanced

- **Convert to 96 DPI Corresponding Value**`Boolean`: Whether to convert border attributes to device-independent units (each unit is 1/96 inch)

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout period for waiting for the target element to exist

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

