---
title: Get Selected Files(Folders) List
---

# Get Selected Files(Folders) List

## Function Description

:::tip 
Get the list of selected files or folders in the currently active file explorer (if the desktop is active, the target is the desktop)
:::

## Configuration Item Description

### General

**Command Input**

- **Get Type`Integer`**: Select the type of selected items to retrieve, supporting files, folders, or all selected items


**Command Output**

- **Save Files(Folders) List To`TList<String>`**: Enter a name to save the files(folders) list


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

