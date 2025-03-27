---
title: Feishu retrieves folder metadata
order: 1
---

# Feishu retrieves folder metadata

## Function Description

:::tip 
Feishu application retrieves metadata of folders in cloud space
:::

![Feishu retrieves folder metadata](../../../../assets/Feishu%20retrieves%20folder%20metadata_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Folder identifier**`String`: The token for the Feishu folder can be obtained by referring to the official documentation


**Command Output**

- **Metadata**`String`: The metadata corresponding to the folder

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

