---
title: Automatic Dialog Handling (Web)
---

# Automatic Dialog Handling (Web)

## Function Description

:::tip 
Begin full-process automatic detection and handling of dialogs (recommended to place this command at the first line of the main process)
:::

## Configuration Item Description

### General

**Command Input**

- **Select Sub-Process to Execute After Triggering`string`**: Select the sub-process to be executed

- **Select Trigger Element`string`**: When this element appears, execute the specified sub-process

- **Dialog Close Button`string`**: Automatically click when this element appears, recommended to set as the close button of the dialog

- **Handling Method`Integer`**: How to handle when the target element appears and is visible


**Command Output**

No output for the current command


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

