---
title: Insert Hyperlink in Word
order: 11
---

# Insert Hyperlink in Word

## Function Description

:::tip 
Insert a hyperlink in a Word document
:::

![Insert Hyperlink in Word](../../../assets/Insert%20Hyperlink%20in%20Word_command.png)

## Configuration Item Description

### General

**Command Input**

- **Word Object**`TDocumentApplication`: Enter a Word object created using the 'Open or Create Word' function

- **Display Text**`string`: Text to be displayed before the hyperlink

- **Hyperlink Address**`string`: The hyperlink address for access

- **Line Break Before Inserting Hyperlink**`Boolean`: Check this box to insert a line break before the hyperlink


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

