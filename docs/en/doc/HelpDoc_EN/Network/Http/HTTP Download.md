---
title: HTTP Download
---

# HTTP Download

## Function Description

:::tip 
HTTP Download
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout (Milliseconds)**`Integer`: Enter the timeout in milliseconds

- **File Name**`string`: Enter the name to be saved in the folder

- **Specify File Name**`Boolean`: Whether to save the response result to a file

- **File Save Directory**`string`: Enter the path where the file will be saved

- **Download URL**`string`: Please enter the request URL


**Command Output**

- **Save Download File Name to**`string`: Specify a variable name that will store the saved download file name (including path)

### Advanced

- **Webpage Object**`TObject`: Enter a webpage object created by 'Get Open Webpage Object'

- **Send HTTP Request via Webpage**`Boolean`: Use case: Need authentication information to send successfully, choose the relative webpage object for authentication

- **Connection Timeout (Milliseconds)**`Integer`: Enter the connection timeout in milliseconds


**Command Output**

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

