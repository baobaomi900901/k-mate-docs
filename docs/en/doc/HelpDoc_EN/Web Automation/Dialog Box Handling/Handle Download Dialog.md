---
title: Handle Download Dialog
---

# Handle Download Dialog

## Function Description

:::tip 
Handle the download dialog that appears
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout (seconds)`string`**: The timeout for waiting for the download, in seconds

- **Wait for Download Completion`Boolean`**: Will wait until the file is fully downloaded within the maximum time limit

- **Save File`string`**: The file to be saved from the download

- **Custom File Name`Boolean`**: Whether to use a custom file name for saving

- **FilePath`string`**: 

- **Button Type`Integer`**: The button that appears in the download dialog

- **Browser Type`Integer`**: The browser object being operated on


**Command Output**

- **File Save Location`string`**: The location where the downloaded file will be saved

### Advanced

- **Focus Timeout (milliseconds)`Integer`**: The timeout for focusing on the dialog box

- **Wait for Dialog Appearance (milliseconds)`Integer`**: The maximum waiting time for the appearance of the dialog box

- **Key Press Interval (milliseconds)`Integer`**: The interval between key presses, in milliseconds

- **Force USA Keyboard Layout`Boolean`**: Switch to English input method

- **Input Method`Integer`**: Input Method


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

