---
title: Select Menu Item (SAP)
order: 10
---

# Select Menu Item (SAP)

## Function Description

:::tip 
Select a menu item from the menu bar
:::

![Select Menu Item (SAP)](../../../assets/Select%20Menu%20Item%20(SAP)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: Enter a retrieved SAP session window

- **Operation Target**`TTarget`: Select the SAP menu bar element to be operated on

- **Menu Item**`string`: Path of the menu item


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout for waiting for the target element to exist

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

