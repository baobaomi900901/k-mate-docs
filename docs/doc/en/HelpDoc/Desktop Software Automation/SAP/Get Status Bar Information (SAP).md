---
title: Get Status Bar Information (SAP)
---

# Get Status Bar Information (SAP)

## Function Description

:::tip 
This command is used to read the type and text of information from the status bar
:::

## Configuration Item Description

### General

**Command Input**

- **Operation Target**`TTarget`: Select the SAP status bar element to be operated on

- **Window Object**`TWinObj`: Enter a retrieved SAP session window


**Command Output**

- **Save Information Content To**`TObject`: Specify a variable to save the content of the information read

- **Save Information Type To**`TObject`: Specify a variable to save the type of information read

### Advanced

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

