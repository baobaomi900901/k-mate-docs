---
title: Set Row Height
---

# Set Row Height

## Function Description

:::tip 
Set row height
:::

## Configuration Item Description

### General

**Command Input**

- **Sheet Name**`string`: Worksheet name

- **Row Height**`Integer`: Enter the row height

- **Mode**`Integer`: Choose the method to set the row height

- **Row Number**`string`: Row number. Starting from 1

- **Excel Instance**`TWorkbookApplication`: Enter an Excel instance obtained through the function 'Open or New Excel'/'Get currently active Excel object'


**Command Output**

No output for the current command


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

