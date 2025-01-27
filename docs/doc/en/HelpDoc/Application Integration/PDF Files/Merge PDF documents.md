---
title: Merge PDF documents
---

# Merge PDF documents

## Function Description

:::tip 
This instruction is used to merge multiple PDF documents and save them as a new document. Before using it, please install the PDF plugin in [Settings] - [Plugin Center].
:::

## Configuration Item Description

### General

**Command Input**

- **If the file already exists**`Integer`: Please choose how to handle the case when the target file already exists.

- **Save the merged file to**`string`: Please enter the path to save the merged file.

- **List of files to be merged**`string`: You can select multiple files at once. Separate file paths with the '|' symbol.


**Command Output**

- **Save the merged file path to**`string`: Specify a variable to save the path of the merged file.

### Advanced

- **Delimiter**`string`: Set the delimiter between passwords.

- **Password**`string`: Enter the password for each file to be merged. Enter the passwords in the order the files are added, and separate them with the specified delimiter. For example, if the files to be merged are file1.pdf (no password) and file2.pdf (requires password), and the delimiter is ';', enter ';password for file2.pdf' in the password box.

- **Use password protection**`Boolean`: Choose whether the files to be merged include any that require password protection.


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

