---
title: Json to String
order: 3
---

# Json to String

## Function Description

:::tip 
Convert Json object to string
:::

![Json to String](../../../assets/Json to String_command.png)

## Configuration Item Description

### General

**Command Input**

- **Json Object**`TJson`: Json Object


**Command Output**

- **Result**`string`: Save the string object

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

