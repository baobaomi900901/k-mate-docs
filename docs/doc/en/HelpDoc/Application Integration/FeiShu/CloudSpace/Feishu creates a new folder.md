---
title: Feishu creates a new folder
order: 2
---

# Feishu creates a new folder

## Function Description

:::tip 
Create an empty folder in the user specified folder
:::

![Feishu creates a new folder](../../../../assets/Feishu%20creates%20a%20new%20folder_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Folder identifier**`String`: The token for the Feishu folder can be obtained by referring to the official documentation

- **Folder Name**`String`: Name of the newly created folder


**Command Output**

- **Create a new folder identifier**`String`: The token for creating a new folder

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

