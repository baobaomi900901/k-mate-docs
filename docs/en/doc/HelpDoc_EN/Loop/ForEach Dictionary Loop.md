---
title: ForEach Dictionary Loop
---

# ForEach Dictionary Loop

## Function Description

:::tip 
This instruction is used to loop through each key-value pair in the dictionary
:::

## Configuration Item Description

### General

**Command Input**

- **Dictionary`TRPADictionary`**: Input dictionary variable, which can be obtained through the function [Create New Dictionary]


**Command Output**

- **Key Value`string`**: Specify a variable name to store the value of the current loop key

- **Key Name`string`**: Specify a variable name to store the key name of the current loop


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

