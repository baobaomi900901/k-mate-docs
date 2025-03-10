---
title: Insert Table in Word
order: 9
---

# Insert Table in Word

## Function Description

:::tip 
Insert a table in a Word document
:::

![Insert Table in Word](../../../assets/Insert Table in Word_command.png)

## Configuration Item Description

### General

**Command Input**

- **Word Object**`TDocumentApplication`: Enter a Word object created using the 'Open or Create Word' function

- **Table Data**`TDataTable`: Enter a data table variable

- **Does the table have borders?**`Boolean`: If checked, the table will have borders

- **Line break before inserting table**`Boolean`: If checked, a line break will be inserted before the table


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

