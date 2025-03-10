---
title: Set Paragraph
order: 15
---

# Set Paragraph

## Function Description

:::tip 
Set the style of the currently selected content (alignment, indentation, line spacing, outline level, etc.)
:::

![Set Paragraph](../../../assets/Set%20Paragraph_command.png)

## Configuration Item Description

### General

**Command Input**

- **Word Object**`TDocumentApplication`: Enter a Word object created by the function 'Open or Create Word'

- **Alignment**`Integer`: Selected alignment option

- **First Line Indent**`Integer`: First Line Indentation

- **Left Indent**`Integer`: Left Indentation

- **Right Indent**`Integer`: Right Indentation

- **Line Spacing Rule**`Integer`: Line Spacing Rule

- **Line Spacing**`Integer`: Line Spacing

- **Outline Level**`Integer`: Outline Level


**Command Output**

No output for the current command

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

