---
title: Open Input Dialog
---

# Open Input Dialog

## Function Description

:::tip 
Open Input Dialog
:::

## Configuration Item Description

### General

**Command Input**

- **Input Field Type`Integer`**: Input Field Type

- **Dialog Title`string`**: Dialog Title


**Command Output**

- **Save User Input Result To`TRPADictionary`**: Specify a variable name to save the user input result, return None if the user cancels the dialog, otherwise return a dict object

### Advanced

- **Default Value`string`**: Default Value

- **Dialog Explanation`string`**: Dialog Explanation


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

