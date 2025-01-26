---
title: Image Processing
---

# Image Processing

## Function Description

:::tip 
Call the Kingsware AI interface for image distortion correction, enhancement, background removal, and other processing.
:::

## Configuration Item Description

### General

**Command Input**

- **Enhancement Type**`Integer`: Get the image enhancement type

- **Model Name**`Integer`: Get the model name

- **Image Path 2**`string`: Enter the image address to be selected.

- **Image Path**`string`: Enter the image address to be selected.

- **Processing Method**`Integer`: Select a processing method


**Command Output**

- **Error Information**`String`: Specify a variable to store the error information

- **Response Body Information**`String`: Specify a variable to store the response body information

- **Response Header Information**`String`: Specify a variable to store the response header information

### Advanced

- **Conversion Path**`string`: The address of the converted image

- **Response Header Type**`array of string`: When a long connection is created between the server and the client, it is necessary to set the 'connection' in the HTTP response header. The default is ['Connection'].


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

