---
title: Set clipboard content
---

# Set clipboard content

## Function Description

:::tip 
Set the content for the clipboard, allowing subsequent Ctrl+V pasting
:::

## Configuration Item Description

### General

**Command Input**

- **Content source**`string`: Enter or select the content to be set to the clipboard, supporting subsequent Ctrl+V pasting


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

