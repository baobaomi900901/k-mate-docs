---
title: Invoke DotNet
order: 1
---

# Invoke DotNet

## Function Description

:::tip 
Executes a specified Script, optionally passing it a list of input parameters.
:::

![Invoke DotNet](../../../assets/Invoke%20DotNet_command.png)

## Configuration Item Description

### General

**Command Input**

- **.net object**`string`: .net object

- **TestButton**`string`: 

- **Script**`string`: 


**Command Output**

- **Result**`string`: Enter a expression

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

