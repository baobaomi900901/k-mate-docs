---
title: Upload File
---

# Upload File

## Function Description

:::tip 
Automatically complete the series of operations such as clicking the upload button and entering the file to be uploaded in the file selection dialog.
:::

## Configuration Item Description

### General

**Command Input**

- **Name`string`**: 

- **Operation Target`TTarget`**: Select the web element to operate on.

- **Web Page Object`TBrowser`**: Enter a web page object that has been obtained or created using the 'Open Web Page' function.


**Command Output**

No output for the current command

### Advanced

- **Focus Timeout (milliseconds)`Integer`**: Focus timeout

- **Wait for Dialog to Appear (milliseconds)`Integer`**: Set the maximum waiting time

- **Key Press Interval (milliseconds)`Integer`**: Interval between key presses

- **Force American Keyboard Layout`Boolean`**: Switch to English input method

- **Input Method`Integer`**: Input method


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

