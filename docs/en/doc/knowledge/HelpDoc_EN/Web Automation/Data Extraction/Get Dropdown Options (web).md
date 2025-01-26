---
title: Get Dropdown Options (web)
---

# Get Dropdown Options (web)

## Function Description

:::tip 
Get the options of a dropdown in the web page
:::

## Configuration Item Description

### General

**Command Input**

- **Get Content**`Integer`: Get Content

- **Operation Target**`TTarget`: Select the web element to be operated on

- **Web Page Object**`TBrowser`: Input a web page object that has been obtained or created through the 'Open Web Page' function


**Command Output**

- **Save Obtained Content To**`TList<String>`: Save the obtained dropdown options content

### Advanced

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout period for waiting for the target dropdown to exist


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

