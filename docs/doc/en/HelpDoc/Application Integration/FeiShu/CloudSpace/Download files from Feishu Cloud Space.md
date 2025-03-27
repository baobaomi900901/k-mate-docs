---
title: Download files from Feishu Cloud Space
order: 11
---

# Download files from Feishu Cloud Space

## Function Description

:::tip 
Download files from cloud storage, such as PDF files. Online documents such as Feishu documents, spreadsheets, and multidimensional tables are not included
:::

![Download files from Feishu Cloud Space](../../../../assets/Download%20files%20from%20Feishu%20Cloud%20Space_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **File identification**`String`: The Token of the Feishu file to be downloaded can be obtained by referring to the official documentation

- **Save Path**`String`: The path where the file is saved


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

