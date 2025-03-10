---
title: Start Listening to Web Requests
order: 8
---

# Start Listening to Web Requests

## Function Description

:::tip 
Filter web listening results based on the entered resource path and resource type.
:::

![Start Listening to Web Requests](../../../assets/Start%20Listening%20to%20Web%20Requests_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Enter a web page object that has been obtained or created through the 'Open Web Page' function.

- **Resource Path URL**`string`: Enter the resource for filtering the listening results.

- **Match According to Wildcard**`Boolean`: Use wildcards to filter the URL.

- **Filter Resource Type**`Integer`: Get the type of web request being listened to


**Command Output**

No output for the current command

### Advanced

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

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

