---
title: Set element attribute (web)
order: 7
---

# Set element attribute (web)

## Function Description

:::tip 
Set the attributes of a web element.
:::

![Set element attribute (web)](../../../assets/Set element attribute (web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Webpage object**`TBrowser`: Enter a webpage object that has been obtained or created through the 'open webpage' function.

- **Operation target**`TTarget`: Select the web element to be operated on.

- **Attribute name**`string`: Enter the name of the attribute to set.

- **Attribute value**`string`: Enter the value for the attribute.


**Command Output**

No output for the current command

### Advanced

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

- **Wait for element existence (ms)**`Integer`: Timeout for waiting for the target element to exist.


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

