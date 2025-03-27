---
title: Feishu Cloud Space Partition Upload Files
order: 12
---

# Feishu Cloud Space Partition Upload Files

## Function Description

:::tip 
Upload the specified file fragment to the designated directory in the cloud space
:::

![Feishu Cloud Space Partition Upload Files](../../../../assets/Feishu%20Cloud%20Space%20Partition%20Upload%20Files_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Folder identifier**`String`: The token for the Feishu folder can be obtained by referring to the official documentation

- **File**`String`: The local path of the file to be uploaded to Feishu Cloud Space


**Command Output**

- **File identification**`String`: After successfully uploading the file, the token of the file will be used

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

