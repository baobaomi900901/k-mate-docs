---
title: Stop Listening to Web Requests
order: 10
---

# Stop Listening to Web Requests

## Function Description

:::tip 
Stop listening to web requests.
:::

![Stop Listening to Web Requests](../../../assets/Stop Listening to Web Requests_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Enter a web page object that has been obtained or created using the 'Open Web Page' function.


**Command Output**

No output for the current command

### Advanced

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution


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

