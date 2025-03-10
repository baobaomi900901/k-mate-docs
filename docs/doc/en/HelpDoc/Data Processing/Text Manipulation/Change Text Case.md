---
title: Change Text Case
order: 7
---

# Change Text Case

## Function Description

:::tip 
This command is used to change the case of text (to all uppercase, all lowercase, or capitalize each word)
:::

![Change Text Case](../../../assets/Change%20Text%20Case_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text Content**`string`: Enter a text string or select a variable containing the string

- **Convert To**`Integer`: Select a conversion method


**Command Output**

- **Save Result To**`string`: Specify a variable to save the converted text content

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

