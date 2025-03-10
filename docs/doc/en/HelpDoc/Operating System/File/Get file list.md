---
title: Get file list
order: 1
---

# Get file list

## Function Description

:::tip 
Retrieve files from a folder
:::

![Get file list](../../../assets/Get%20file%20list_command.png)

## Configuration Item Description

### General

**Command Input**

- **Folder**`string`: The path of the folder to search

- **File name matching rules**`string`: Enter file name matching rules, wildcards allowed. For example: 'Image*', 'Image?', multiple rules separated by commas, e.g., rule1, rule2

- **Find subdirectories**`Boolean`: Whether to recursively search for files in subdirectories

- **Ignore hidden files**`Boolean`: Whether to ignore hidden files

- **Specify file list sorting rules**`Boolean`: Specify sorting rules for the file list

- **Sorting factor**`Integer`: Choose the sorting factor for the file list

- **Sorting method**`Integer`: Choose the sorting method for the file list


**Command Output**

- **Save file list to**`TList<String>`: Enter a name to save the file list

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

