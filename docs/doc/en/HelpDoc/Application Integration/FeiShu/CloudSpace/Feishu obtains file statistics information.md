---
title: Feishu obtains file statistics information
order: 6
---

# Feishu obtains file statistics information

## Function Description

:::tip 
Retrieve statistical information for the specified file
:::

![Feishu obtains file statistics information](../../../../assets/Feishu%20obtains%20file%20statistics%20information_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **File identification**`String`: The Token for Feishu files can be obtained by referring to the official documentation

- **File type**`Integer`: Types of Feishu Files


**Command Output**

- **Statistical information**`String`: Statistical information of files

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

