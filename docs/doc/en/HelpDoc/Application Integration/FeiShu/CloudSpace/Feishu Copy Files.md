---
title: Feishu Copy Files
order: 7
---

# Feishu Copy Files

## Function Description

:::tip 
Copy and paste the specified file into the specified folder
:::

![Feishu Copy Files](../../../../assets/Feishu%20Copy%20Files_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **File identification**`String`: To copy the token of Feishu file, please refer to the official documentation for the method of obtaining it

- **The file name**`String`: The name of the file to be pasted in Feishu

- **Folder identifier**`String`: The token for the Feishu folder can be obtained by referring to the official documentation

- **File type**`Integer`: Types of Feishu Files


**Command Output**

- **Paste file identifier**`String`: The Token of the pasted Feishu file

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

