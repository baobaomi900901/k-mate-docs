---
title: Set checkbox (web)
order: 5
---

# Set checkbox (web)

## Function Description

:::tip 
Set the state of a checkbox on the webpage to checked or unchecked.
:::

![Set checkbox (web)](../../../assets/Set%20checkbox%20(web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Webpage object**`TBrowser`: Enter a webpage object that has been obtained or created through the 'open webpage' function.

- **Operation target**`TTarget`: Select the web element to be operated on.

- **Operation**`Integer`: The operation to be performed on the checkbox.


**Command Output**

No output for the current command

### Advanced

- **Delay time (ms)**`Integer`: Time to continue waiting after the command is executed.

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

- **Wait for element existence (ms)**`Integer`: Timeout for waiting for the target checkbox to exist.

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

