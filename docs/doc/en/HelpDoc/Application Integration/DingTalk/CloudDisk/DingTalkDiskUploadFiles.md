---
title: DingTalkDiskUploadFiles
order: 4
---

# DingTalkDiskUploadFiles

## Function Description

:::tip 
Upload files to Dingdisk
:::

![DingTalkDiskUploadFiles](../../../../assets/DingTalkDiskUploadFiles_command.png)

## Configuration Item Description

### General

**Command Input**

- **DingTalkWorkbook**`TDingTalkDisk`: The nail object returned by establishing a nail table connection

- **SpaceId**`String`: The space ID of the nail drive where the file is located

- **ParentDirectoryID**`String`: The folder ID in the drive where the file is located

- **LocalPath**`String`: Local file path to be uploaded


**Command Output**

- **FilesID**`String`: The unique identifier of files in the Dingdisk, which can be used for sending files to group sessions in the future

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

