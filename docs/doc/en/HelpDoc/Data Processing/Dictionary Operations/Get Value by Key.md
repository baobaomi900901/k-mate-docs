---
title: Get Value by Key
---

# Get Value by Key

## Function Description

:::tip 
This command is used to get the value corresponding to a specified key name in a dictionary
:::

## Configuration Item Description

### General

**Command Input**

- **Default Value**`string`: Enter default key value

- **When Key Does Not Exist**`Integer`: Choose how to handle when the input key does not exist

- **Key Name**`string`: Enter the key name

- **Dictionary**`TRPADictionary`: Enter the dictionary variable


**Command Output**

- **Save Value To**`string`: Specify a variable to save the found key value


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

