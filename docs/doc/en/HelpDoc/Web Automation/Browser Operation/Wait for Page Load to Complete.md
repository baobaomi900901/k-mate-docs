---
title: Wait for Page Load to Complete
order: 2
---

# Wait for Page Load to Complete

## Function Description

:::tip 
Wait for the web page to load completely
:::

![Wait for Page Load to Complete](../../../assets/Wait for Page Load to Complete_command.png)

## Configuration Item Description

### General

**Command Input**

- **Webpage Object**`TBrowser`: Enter a webpage object that has been obtained or created through the 'Open Webpage' function

- **Load Timeout (milliseconds)**`Integer`: The timeout for the page to load completely

- **Action if Timeout**`Integer`: The action to perform if the page load times out


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

