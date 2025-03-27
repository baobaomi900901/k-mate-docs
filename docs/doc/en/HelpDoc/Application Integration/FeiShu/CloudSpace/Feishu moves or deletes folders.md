---
title: Feishu moves or deletes folders
order: 3
---

# Feishu moves or deletes folders

## Function Description

:::tip 
Move folders from the user's cloud space to another cloud space or delete them
:::

![Feishu moves or deletes folders](../../../../assets/Feishu%20moves%20or%20deletes%20folders_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Folder identifier**`String`: The token for the Feishu folder can be obtained by referring to the official documentation

- **Target folder identifier**`String`: If the token of the target Feishu folder is deleted, this field will not be used

- **Method**`Integer`: The operation to be performed can choose to move or delete


**Command Output**

- **Task ID**`String`: The asynchronous task ID for performing this operation

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

