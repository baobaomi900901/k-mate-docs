---
title: Text Review (Baidu)
order: 7
---

# Text Review (Baidu)

## Function Description

:::tip 
Call Baidu AI for text review
:::

![Text Review (Baidu)](../../../assets/Text%20Review%20(Baidu)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Text Content**`string`: Enter the text content for review


**Command Output**

- **Result**`string`: Review result

### Advanced

- **Proxy Parameters**`string`: When our program cannot directly connect to the target network but the other party has installed a proxy server, format as Address:Port

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

