---
title: Card Certificate Recognition
---

# Card Certificate Recognition

## Function Description

:::tip 
Call the AI interface to recognize card certificates such as bank cards, business licenses, passports, etc.
:::

## Configuration Item Description

### General

**Command Input**

- **Card Certificate Type**`Integer`: Select the type of card certificate to recognize

- **Image Coordinates Position**`Integer`: Output default value (corresponding to top-left coordinates and width/height), or output quadrangle format (i.e., output the coordinates of the four corner points of the detection box)

- **Image Path**`string`: Input the address of the image to be selected

- **Recognition Method**`Integer`: Select the recognition method


**Command Output**

- **Error Information**`String`: Specify a variable to store the error information

- **Response Body Information**`String`: Specify a variable to store the response body information

- **Response Header Information**`String`: Specify a variable to store the response header information

- **Result**`string`: Specify a variable to store the recognition result

### Advanced

- **Response Header Type**`array of string`: When a long connection is established between the server and client, necessary settings need to be made to the HTTP response header's connection. Default is ['Connection'].

- **Proxy Parameters**`string`: Proxy server, format: address:port


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

