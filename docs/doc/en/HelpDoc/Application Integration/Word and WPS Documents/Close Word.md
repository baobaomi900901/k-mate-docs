---
title: Close Word
---

# Close Word

## Function Description

:::tip 
Close Word
:::

## Configuration Item Description

### General

**Command Input**

- **Cover if file exists**`Boolean`: If the file already exists and you choose not to cover it, an error will be prompted that the file already exists

- **Word file path**`string`: Enter or select the Word file path to open

- **Close type**`Integer`: Close type

- **Terminate Word process**`Boolean`: If checked, it will forcefully end the specified Word process for the current user and all its child processes

- **Close process**`Integer`: Close process

- **Word object**`TDocumentApplication`: Enter a Word object created by the 'Open or Create Word' function

- **Operation**`Integer`: Choose whether to close a specified Word file or close all Word files


**Command Output**

No output for the current command


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

