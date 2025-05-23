---
title: Bill Identification
order: 1
---

# Bill Identification

## Function Description

:::tip 
Call the AI interface to recognize various bills such as VAT invoices, train tickets, taxi receipts, etc.
:::

![Bill Identification](../../../assets/Bill%20Identification_command.png)

## Configuration Item Description

### General

**Command Input**

- **Recognition Method**`Integer`: Choose the recognition method

- **Image Path**`string`: Enter the image path to be selected

- **Version Format**`Integer`: When set to v1, the return format is key: value. When set to v2, the return format is key: ['word: value']

- **Ticket Type**`Integer`: Ticket Type

- **Version**`Integer`: Old Version V1.0: Calls the old API from INTSIG's official website; New Version V1.0: Calls the new API from INTSIG's official website and returns recognized content in coordinate form; New Version V2.0: Calls the new API from INTSIG's official website and returns recognized content in JSON format


**Command Output**

- **Result**`string`: Specify a variable to store the recognition result

- **Response Header Information**`String`: Specify a variable to store the response header information

- **Response Body Information**`String`: Specify a variable to store the response body information

- **Error Information**`String`: Specify a variable to store the error information

### Advanced

- **Proxy Parameters**`string`: When our program cannot directly connect to the target network but the other party has installed a proxy server, in the format of address:port

- **Response Header Type**`array of string`: When the server and client establish a long connection, necessary settings for the HTTP response header's connection are required. Default is ['Connection']

- **DelayBefore(milliseconds)**`Integer`: The waiting time before instruction execution

- **Timeout (milliseconds)**`Integer`: Maximum wait time (milliseconds)

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

