---
title: Read table content (SAP)
---

# Read table content (SAP)

## Function Description

:::tip 
Read content from SAP table, supporting rectangular area reading
:::

## Configuration Item Description

### General

**Command Input**

- **Column number**`Integer`: Column number

- **Row number**`Integer`: Row number

- **End column number**`Integer`: End column number

- **End row number**`Integer`: End row number

- **Start column number**`Integer`: Start column number

- **Start row number**`Integer`: Start row number

- **Reading method**`Integer`: Choose how to read

- **Operation target**`TTarget`: Select the SAP table element to operate on

- **Window object**`TWinObj`: Enter a SAP session window that has been obtained


**Command Output**

- **Save SAP table content to**`Integer`: Specify a variable to save the SAP table content

### Advanced

- **Whether to need table column names**`Boolean`: After checking, automatically fill in the column names in the output column

- **Wait for element to exist (milliseconds)**`Integer`: Timeout time for waiting for the target element to exist


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

