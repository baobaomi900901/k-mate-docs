---
title: Set Paragraph
---

# Set Paragraph

## Function Description

:::tip 
Set the style of the currently selected content (alignment, indentation, line spacing, outline level, etc.)
:::

## Configuration Item Description

### General

**Command Input**

- **Outline Level**`Integer`: Outline Level

- **Line Spacing**`Integer`: Line Spacing

- **Line Spacing Rule**`Integer`: Line Spacing Rule

- **Right Indent**`Integer`: Right Indentation

- **Left Indent**`Integer`: Left Indentation

- **First Line Indent**`Integer`: First Line Indentation

- **Alignment**`Integer`: Selected alignment option

- **Word Object**`TDocumentApplication`: Enter a Word object created by the function 'Open or Create Word'


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

