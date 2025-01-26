---
title: Insert Table in Word
---

# Insert Table in Word

## Function Description

:::tip 
Insert a table in a Word document
:::

## Configuration Item Description

### General

**Command Input**

- **Line break before inserting table**`Boolean`: If checked, a line break will be inserted before the table

- **Does the table have borders?**`Boolean`: If checked, the table will have borders

- **Table Data**`TDataTable`: The data format of the content needs to correspond to the range, with content for rows, columns, and areas provided as a list

- **Word Object**`TDocumentApplication`: Enter a Word object created using the 'Open or Create Word' function


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

