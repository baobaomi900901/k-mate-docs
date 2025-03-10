---
title: Get Json Value
order: 6
---

# Get Json Value

## Function Description

:::tip 
Get the value of a Json object with the specified type
:::

![Get Json Value](../../../assets/Get%20Json%20Value_command.png)

## Configuration Item Description

### General

**Command Input**

- **Json Object**`TJson`: Json Object

- **Key**`string`: Key

- **Data Type**`Integer`: Data Type

- **Special Characters**`Boolean`: Check this box if the Key contains special characters.


**Command Output**

- **Value**`string`: Value

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

