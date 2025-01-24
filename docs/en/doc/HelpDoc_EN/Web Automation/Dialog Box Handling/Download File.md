---
title: Download File
---

# Download File

## Function Description

:::tip 
Automatically complete the series of operations such as clicking the download button and entering the save file information in the file save dialog.
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout (seconds)`string`**: The timeout for waiting for the file download, in seconds.

- **Wait for Download to Complete`Boolean`**: Will wait until the file is fully downloaded within the maximum time limit.

- **Save File Name`string`**: The file name to be saved.

- **Custom Save File Name`Boolean`**: Whether to customize the save file name.

- **Save Folder`string`**: The folder where the downloaded file will be saved.

- **Download URL`string`**: The request address to be downloaded.

- **Operation Target`TTarget`**: Select the web element to operate on.

- **Download Scenario`Integer`**: Download Scenario

- **Web Page Object`TBrowser`**: Enter a web page object that has been obtained or created using the 'Open Web Page' function.


**Command Output**

No output for the current command

### Advanced

- **Focus Timeout (milliseconds)`Integer`**: Focus timeout, in milliseconds.

- **Wait for Dialog to Appear (milliseconds)`Integer`**: Set the maximum waiting time for the appearance of the dialog, in milliseconds.

- **Key Press Interval (milliseconds)`Integer`**: The interval between two key presses, in milliseconds.

- **Force American Keyboard Layout`Boolean`**: Switch to English input method.

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

