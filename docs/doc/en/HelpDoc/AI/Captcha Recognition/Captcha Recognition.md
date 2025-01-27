---
title: Captcha Recognition
---

# Captcha Recognition

## Function Description

:::tip 
Call the Kingsware AI interface for captcha recognition
:::

## Configuration Item Description

### General

**Command Input**

- **Captcha Type**`Integer`: Enter the appropriate captcha type

- **Type**`Integer`: Obtain the type

- **Slider Image File**`string`: Enter the path of the slider image file to select

- **Label**`String`: Objects in the 9-grid

- **Label Type**`String`: Enter the correct label type

- **Image Path**`string`: Enter the image path to select

- **Recognition Method**`Integer`: Choose the recognition method


**Command Output**

- **Error Information**`String`: Specify a variable to store the error information.

- **Response Body Information**`String`: Specify a variable to store the response body information.

- **Response Header Information**`String`: Specify a variable to store the response header information.

### Advanced

- **sProxyParam**`string`: 

- **Response Header Type**`array of string`: When the server and client establish a long connection, it is necessary to set the HTTP response header 'Connection'. The default is ['Connection'].


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

