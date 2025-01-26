---
title: Get ComboBox Options (Win)
---

# Get ComboBox Options (Win)

## Function Description

:::tip 
Get the options of a combo box in the window
:::

## Configuration Item Description

### General

**Command Input**

- **Get Content**`Integer`: Choose to get the currently selected item or all drop-down options

- **Operation Target**`TTarget`: Select the desktop software element to operate on

- **Window Object**`TWinObj`: Enter the window object


**Command Output**

- **Save Content To**`TList<String>`: Specify a variable to save the content of the retrieved options

### Advanced

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

