---
title: Create folder
order: 3
---

# Create folder

## Function Description

:::tip 
Create a folder
:::

![Create folder](../../../assets/Create%20folder_command.png)

## Configuration Item Description

### General

**Command Input**

- **Parent folder path**`string`: Enter or select the directory where the new folder will be created

- **New folder name**`string`: Enter the name of the newly created folder


**Command Output**

- **Save new folder path to**`string`: Enter a name to save the new folder path

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

