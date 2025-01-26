---
title: Clear Excel Content
---

# Clear Excel Content

## Function Description

:::tip 
Clear content or format from the Excel file
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet Name**`string`: If empty, it defaults to the currently active sheet

- **End Column Name**`string`: Column name. Starts from A

- **End Row Number**`Integer`: Row number. Starts from 1

- **Start Column Name**`string`: Column name. Starts from A

- **Start Row Number**`Integer`: Row number. Starts from 1

- **Column Name**`string`: Column name. Starts from A

- **Row Number**`Integer`: Row number. Starts from 1

- **Unit Column Name**`string`: Column name. Starts from A

- **Unit Row Number**`Integer`: Row number. Starts from 1

- **Clear Method**`Integer`: Choose to clear by cell/row/column/range

- **Clear Content**`Integer`: Choose to clear content/format/all

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or create new Excel' / 'Get currently active Excel object'


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

