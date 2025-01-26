---
title: Take Web Screenshot
---

# Take Web Screenshot

## Function Description

:::tip 
Take a screenshot of the specified area and save it to a file or add it to the clipboard.
:::

## Configuration Item Description

### General

**Command Input**

- **Overwrite If File Exists**`Boolean`: Overwrite If File Exists

- **Custom File Name**`string`: Custom file name.

- **Use Unique File Names**`Boolean`: Automatically generate non-repeating file names.

- **Save Folder**`string`: The folder where the screenshot is saved.

- **Save Image to Clipboard**`Boolean`: Save the image to the clipboard.

- **Operation Target**`TTarget`: Select the web page element to be operated on.

- **Screenshot Area**`Integer`: Three types of areas:

- **Web Page Object**`TBrowser`: Input an obtained or created web page object using the 'Open Web Page' function.


**Command Output**

- **Screenshot Save Location**`string`: The location of the screenshot file.

### Advanced

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

