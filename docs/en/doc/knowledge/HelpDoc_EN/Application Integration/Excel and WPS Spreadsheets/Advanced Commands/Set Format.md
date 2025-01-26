---
title: Set Format
---

# Set Format

## Function Description

:::tip 
Set cell format: number, alignment, font, border, fill, protection
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet Name**`string`: Worksheet name

- **Column Name**`string`: Column name starting from A

- **Row Number**`Integer`: Row number starting from 1

- **End Column Name**`string`: Column name starting from A

- **End Row Number**`Integer`: Row number starting from 1

- **Start Column Name**`string`: Column name starting from A

- **Start Row Number**`Integer`: Row number starting from 1

- **Column Name of Cell**`string`: Column name starting from A

- **Row Number of Cell**`Integer`: Row number starting from 1

- **Region Type**`Integer`: Specify the region to set the format for

- **FormatSet**`string`: 

- **Excel Object**`TWorkbookApplication`: Enter an Excel object obtained through the function 'Open or New Excel'/'Get currently active Excel object'


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

