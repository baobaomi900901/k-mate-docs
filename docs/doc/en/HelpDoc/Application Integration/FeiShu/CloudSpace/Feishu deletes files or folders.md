---
title: Feishu deletes files or folders
order: 9
---

# Feishu deletes files or folders

## Function Description

:::tip 
Delete the user's files or folders in the cloud space
:::

![Feishu deletes files or folders](../../../../assets/Feishu%20deletes%20files%20or%20folders_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **File identification**`String`: The Token for Feishu files can be obtained by referring to the official documentation

- **File type**`Integer`: Types of Feishu Files


**Command Output**

- **Task ID**`String`: If the selected file type is a folder, return the asynchronous task ID that performed the operation. In other cases, there is no asynchronous task ID

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

