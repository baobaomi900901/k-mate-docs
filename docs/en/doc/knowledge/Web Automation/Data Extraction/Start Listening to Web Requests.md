---
title: Start Listening to Web Requests
---

# Start Listening to Web Requests

## Function Description

:::tip 
Filter web listening results based on the entered resource path and resource type.
:::

## Configuration Item Description

### General

**Command Input**

- **Filter Resource Type**`Integer`: Get the type of web listening.

- **Match According to Wildcard**`Boolean`: Use wildcards to filter the URL.

- **Resource Path URL**`string`: Enter the resource for filtering the listening results.

- **Web Page Object**`TBrowser`: Enter a web page object that has been obtained or created through the 'Open Web Page' function.


**Command Output**

No output for the current command


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

