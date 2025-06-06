---
title: Take Web Screenshot
order: 1
---

# Take Web Screenshot

## Function Description

:::tip 
Take a screenshot of the specified area and save it to a file or add it to the clipboard.
:::

![Take Web Screenshot](../../../assets/Take%20Web%20Screenshot_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Input an obtained or created web page object using the 'Open Web Page' function.

- **Screenshot Area**`Integer`: Three types of areas:

- **Operation Target**`TTarget`: Select the web page element to be operated on.

- **Save Image to Clipboard**`Boolean`: Save the image to the clipboard.

- **Save Folder**`string`: The folder where the screenshot is saved.

- **Use Unique File Names**`Boolean`: Automatically generate non-repeating file names.

- **Custom File Name**`string`: Custom file name.


**Command Output**

- **Screenshot Save Location**`string`: The location of the screenshot file.

### Advanced

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout for waiting for the target element to exist.

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

