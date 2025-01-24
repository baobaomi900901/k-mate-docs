---
title: Get Element Info (Win)
---

# Get Element Info (Win)

## Function Description

:::tip 
Get the text content, attributes, value, and position of a specified element in the window
:::

## Configuration Item Description

### General

**Command Input**

- **Relative To**`Integer`: Position in the screen

- **Attribute Name**`string`: Element Attribute Name

- **Operation**`Integer`: Window Element Information

- **Operation Target**`TTarget`: Select the desktop software element to operate on

- **Window Object**`TWinObj`: Enter a captured window object


**Command Output**

- **Save Element Info To**`string`: Save the captured window element information

### Advanced

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout period for waiting for the target element to exist

- **Convert to 96 DPI Corresponding Value**`Boolean`: Whether to convert border attributes to device-independent units (each unit is 1/96 inch)


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

