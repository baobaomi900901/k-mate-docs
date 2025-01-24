---
title: Get Dictionary Key List
---

# Get Dictionary Key List

## Function Description

:::tip 
This command is used to get a list of key names from a dictionary
:::

## Configuration Item Description

### General

**Command Input**

- **Dictionary**`TRPADictionary`: Enter the dictionary variable


**Command Output**

- **Save Key List To**`TList<String>`: Enter a name to save the found key list


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

