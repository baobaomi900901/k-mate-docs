---
title: Feishu Upload Files
order: 5
---

# Feishu Upload Files

## Function Description

:::tip 
Upload files from Feishu application to Feishu server
:::

![Feishu Upload Files](../../../assets/Feishu%20Upload%20Files_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **File type**`Integer`: Feishu file type, optional value options include [opus, mp4, pdf, doc, xls, ppt, stream]

- **File Name**`String`: The name of the image to be sent

- **File Path**`String`: The path of the file to be uploaded


**Command Output**

- **File ID**`String`: The file ID returned after uploading is completed

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

