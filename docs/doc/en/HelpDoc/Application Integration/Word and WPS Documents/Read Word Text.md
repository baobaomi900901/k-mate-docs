---
title: Read Word Text
order: 3
---

# Read Word Text

## Function Description

:::tip 
Read text from a Word file
:::

![Read Word Text](../../../assets/Read%20Word%20Text_command.png)

## Configuration Item Description

### General

**Command Input**

- **Word Object**`TDocumentApplication`: Enter a Word object created through the 'Open or Create Word' function

- **Read Range**`Integer`: Specify the range of Word content to be read


**Command Output**

- **Save Word Content As**`string`: Specify a variable name to save the field data content

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

