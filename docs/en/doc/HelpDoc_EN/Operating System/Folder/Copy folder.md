---
title: Copy folder
---

# Copy folder

## Function Description

:::tip 
Copy the source folder to the target folder
:::

## Configuration Item Description

### General

**Command Input**

- **Copy method`Integer`**: How to handle when files already exist

- **Target folder`string`**: Enter the target folder path

- **Source folder`string`**: Enter or select the path of the folder to be copied


**Command Output**

- **Copied folder path`string`**: Enter a name to save the path of the copied folder


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

