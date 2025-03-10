---
title: Select Date (SAP)
order: 11
---

# Select Date (SAP)

## Function Description

:::tip 
Select a date or date range
:::

![Select Date (SAP)](../../../assets/Select Date (SAP)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: Enter a retrieved SAP session window

- **Operation Target**`TTarget`: Select the calendar element to be operated on

- **Date Selection Method**`Integer`: Method of date selection

- **Date**`string`: Format: yyyy-mm-dd

- **Start Date**`string`: Format: yyyy-mm-dd

- **End Date**`string`: Format: yyyy-mm-dd

- **Year**`Integer`: Which year

- **Week**`Integer`: Which complete week


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout for waiting for the target element to exist


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

