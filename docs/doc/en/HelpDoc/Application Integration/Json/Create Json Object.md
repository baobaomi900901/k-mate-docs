---
title: Create Json Object
order: 1
---

# Create Json Object

## Function Description

:::tip 
Create a Json object of a specified type
:::

![Create Json Object](../../../assets/Create Json Object_command.png)

## Configuration Item Description

### General

**Command Input**

- **Data Type**`Integer`: Select the data type

- **Processing Type**`Integer`: The processing type for Json, default uses the original logic, second option uses uLkJSON processing logic


**Command Output**

- **Json Object**`TJson`: Returned Json object

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

