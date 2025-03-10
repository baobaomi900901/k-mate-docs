---
title: Get Dropdown Options (web)
order: 3
---

# Get Dropdown Options (web)

## Function Description

:::tip 
Get the options of a dropdown in the web page
:::

![Get Dropdown Options (web)](../../../assets/Get Dropdown Options (web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Input a web page object that has been obtained or created through the 'Open Web Page' function

- **Operation Target**`TTarget`: Select the web element to be operated on

- **Get Content**`Integer`: Get Content


**Command Output**

- **Save Obtained Content To**`TList<String>`: Save the obtained dropdown options content

### Advanced

- **DelayBefore**`Integer`: 

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

