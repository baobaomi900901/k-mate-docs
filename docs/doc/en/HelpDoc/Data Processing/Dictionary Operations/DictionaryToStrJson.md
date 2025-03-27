---
title: DictionaryToStrJson
order: 7
---

# DictionaryToStrJson

## Function Description

:::tip 
Used to convert dictionary variables into JSON formatted strings
:::

![DictionaryToStrJson](../../../assets/DictionaryToStrJson_command.png)

## Configuration Item Description

### General

**Command Input**

- **Dictionary**`TRPADictionary`: Enter the dictionary variable


**Command Output**

- **Conversion result:**`string`: Dictionary to string output result

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

