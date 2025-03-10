---
title: Get Web Page Information
order: 4
---

# Get Web Page Information

## Function Description

:::tip 
Get web page text content, URL, source code, title, etc.
:::

![Get Web Page Information](../../../assets/Get%20Web%20Page%20Information_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Input a web page object that has been obtained or created through the 'Open Web Page' function

- **Operation**`Integer`: The web information to be obtained


**Command Output**

- **Save Web Page Information To**`string`: Save the obtained web page information

### Advanced

- **DelayBefore**`Integer`: 

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

