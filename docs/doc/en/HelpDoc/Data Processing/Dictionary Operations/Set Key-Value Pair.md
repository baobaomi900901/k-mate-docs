---
title: Set Key-Value Pair
order: 2
---

# Set Key-Value Pair

## Function Description

:::tip 
This command is used to set a key-value pair in a dictionary, modifying the value if the key already exists
:::

![Set Key-Value Pair](../../../assets/Set Key-Value Pair_command.png)

## Configuration Item Description

### General

**Command Input**

- **Dictionary**`TRPADictionary`: Enter the dictionary variable

- **Key Name**`string`: Enter the key name

- **Value**`string`: Enter the key value


**Command Output**

No output for the current command


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

