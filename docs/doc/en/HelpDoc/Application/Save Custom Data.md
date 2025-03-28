---
title: Save Custom Data
order: 2
---

# Save Custom Data

## Function Description

:::tip 
Persistently save user data within the process
:::

![Save Custom Data](../../assets/Save%20Custom%20Data_command.png)

## Configuration Item Description

### General

**Command Input**

- **Key**`string`: Required for data retrieval, limited to the same user and application. Multiple saves with the same key will overwrite the content.

- **Data Content**`string`: The content of the data to be saved, with a maximum length of 20,000 characters


**Command Output**

No output for the current command

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

