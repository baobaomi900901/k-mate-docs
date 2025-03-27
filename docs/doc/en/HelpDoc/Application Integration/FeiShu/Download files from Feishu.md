---
title: Download files from Feishu
order: 11
---

# Download files from Feishu

## Function Description

:::tip 
Download the file uploaded by Feishu
:::

![Download files from Feishu](../../../assets/Download%20files%20from%20Feishu_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **File key**`String`: File_key returned after uploading the file

- **Save Path**`String`: To download the file's save path


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

