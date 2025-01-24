---
title: Write Text to Word
---

# Write Text to Word

## Function Description

:::tip 
Write or overwrite text in the current selection area of the Word document
:::

## Configuration Item Description

### General

**Command Input**

- **Line Break Before Writing**`Boolean`: If checked, a line break will occur before writing the text

- **Text Style**`string`: Set the text style

- **Text Content**`string`: Text to be written into the current selection area

- **Word Object**`TDocumentApplication`: Enter a Word object created by the 'Open or Create Word' function


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

