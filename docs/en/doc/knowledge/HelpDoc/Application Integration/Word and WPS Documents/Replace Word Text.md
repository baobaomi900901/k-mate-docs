---
title: Replace Word Text
---

# Replace Word Text

## Function Description

:::tip 
Replace text content in a Word document
:::

## Configuration Item Description

### General

**Command Input**

- **Case Sensitive**`Boolean`: If checked, the replacement will be case sensitive

- **Replace All**`Boolean`: If checked, replace all found text

- **Replace with**`string`: Text to replace

- **Find Text**`string`: Text to find

- **Word Object**`TDocumentApplication`: Enter a Word object created by the 'Open or Create Word' function


**Command Output**

- **Save number of replacements to**`Integer`: Specify a variable name to store the number of replacements


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

