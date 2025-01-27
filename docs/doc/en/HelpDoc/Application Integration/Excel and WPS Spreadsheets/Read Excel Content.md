---
title: Read Excel Content
---

# Read Excel Content

## Function Description

:::tip 
Read content from an Excel file, supports reading within a rectangular area range.
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet Page Name**`string`: If empty, it defaults to the currently active Sheet page.

- **Ending Column Name**`string`: Column name. Starts from A.

- **Ending Row Number**`Integer`: Row number. Starts from 1.

- **Starting Column Name**`string`: Column name. Starts from A.

- **Starting Row Number**`Integer`: Row number. Starts from 1.

- **Column Name**`string`: Column name. Starts from A.

- **Row Number**`Integer`: Row number. Starts from 1.

- **Cell Column Name**`string`: Column name. Starts from A.

- **Cell Row Number**`Integer`: Row number. Starts from 1.

- **Read Method**`Integer`: The method of reading an Excel file.

- **Excel Object**`TWorkbookApplication`: Input an Excel object obtained through the function 'Open or New Excel'/'Get Currently Active Excel Object'.


**Command Output**

- **Save Excel Data Object To**`TDataTable`: Save area data content.

### Advanced

- **Clear Space Before and After Cell**`Boolean`: If checked, automatically clears spaces before and after the read content.

- **Displayed Content Column**`string`: Display visible content, multiple columns separated by commas.

- **Read Cell Displayed Content**`Boolean`: If unchecked, integers are read as decimals (1=1.0).


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

