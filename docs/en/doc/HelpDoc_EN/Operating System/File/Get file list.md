---
title: Get file list
---

# Get file list

## Function Description

:::tip 
Retrieve files from a folder
:::

## Configuration Item Description

### General

**Command Input**

- **Sorting method`Integer`**: Choose the sorting method for the file list

- **Sorting factor`Integer`**: Choose the sorting factor for the file list

- **Specify file list sorting rules`Boolean`**: Specify sorting rules for the file list

- **Ignore hidden files`Boolean`**: Whether to ignore hidden files

- **Find subdirectories`Boolean`**: Whether to recursively search for files in subdirectories

- **File name matching rules`string`**: Enter file name matching rules, wildcards allowed. For example: 'Image*', 'Image?', multiple rules separated by commas, e.g., rule1, rule2

- **Folder`string`**: The path of the folder to search


**Command Output**

- **Save file list to`TList<String>`**: Enter a name to save the file list


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

