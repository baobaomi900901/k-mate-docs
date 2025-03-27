---
title: DingTalkDiskSendFilesUsers
order: 2
---

# DingTalkDiskSendFilesUsers

## Function Description

:::tip 
DingTalkDiskSendFilesUsers
:::

![DingTalkDiskSendFilesUsers](../../../../assets/DingTalkDiskSendFilesUsers_command.png)

## Configuration Item Description

### General

**Command Input**

- **DingTalkWorkbook**`TDingTalkDisk`: The nail object returned by establishing a nail table connection

- **SpaceId**`String`: The space ID of the nail drive where the file is located

- **FileId**`String`: The ID of the online file

- **UserId**`String`: Specify the user's ID


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

