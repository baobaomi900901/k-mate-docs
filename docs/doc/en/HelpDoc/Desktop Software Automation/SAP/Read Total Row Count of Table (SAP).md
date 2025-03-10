---
title: Read Total Row Count of Table (SAP)
order: 5
---

# Read Total Row Count of Table (SAP)

## Function Description

:::tip 
Read the total number of rows in the data table
:::

![Read Total Row Count of Table (SAP)](../../../assets/Read%20Total%20Row%20Count%20of%20Table%20(SAP)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: Enter a retrieved SAP session window

- **Operation Target**`TTarget`: Select the SAP table element to be operated on


**Command Output**

- **Save Total Row Count To**`Integer`: Specify a variable to save the total row count

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout for waiting for the target element to exist

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

