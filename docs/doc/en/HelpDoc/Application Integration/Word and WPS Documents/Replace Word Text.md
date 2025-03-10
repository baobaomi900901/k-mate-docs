---
title: Replace Word Text
order: 7
---

# Replace Word Text

## Function Description

:::tip 
Replace text content in a Word document
:::

![Replace Word Text](../../../assets/Replace%20Word%20Text_command.png)

## Configuration Item Description

### General

**Command Input**

- **Word Object**`TDocumentApplication`: Enter a Word object created by the 'Open or Create Word' function

- **Find Text**`string`: Text to find

- **Replace with**`string`: Text to replace

- **Replace All**`Boolean`: If checked, replace all found text

- **Case Sensitive**`Boolean`: If checked, the replacement will be case sensitive


**Command Output**

- **Save number of replacements to**`Integer`: Specify a variable name to store the number of replacements

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

