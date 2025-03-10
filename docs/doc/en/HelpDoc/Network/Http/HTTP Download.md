---
title: HTTP Download
order: 2
---

# HTTP Download

## Function Description

:::tip 
HTTP Download
:::

![HTTP Download](../../../assets/HTTP%20Download_command.png)

## Configuration Item Description

### General

**Command Input**

- **Download URL**`string`: Please enter the request URL

- **File Save Directory**`string`: Enter the path where the file will be saved

- **Specify File Name**`Boolean`: Whether to save the response result to a file

- **File Name**`string`: Enter the name to be saved in the folder


**Command Output**

- **Save Download File Name to**`string`: Specify a variable name that will store the saved download file name (including path)

### Advanced

- **Connection Timeout (Milliseconds)**`Integer`: Enter the connection timeout in milliseconds

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

