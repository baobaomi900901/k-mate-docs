---
title: Set Variable
---

# Set Variable

## Function Description

:::tip 
Create a new variable and assign it a value, or reassign a value to an existing variable
:::

## Configuration Item Description

### General

**Command Input**

- **Value**`Variant`: Specify the value to be saved in the variable

- **Variable Type**`Integer`: Select the appropriate type based on the variable's value


**Command Output**

- **Variable Name**`Variant`: Enter a name for the variable to save the value into


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

