---
title: Extract Web Dialog Content
---

# Extract Web Dialog Content

## Function Description

:::tip 
Extract the content of a web dialog box
:::

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Input a web page object that has been obtained or created through the 'Open Web Page' function


**Command Output**

- **Save Dialog Content To**`string`: Save the extracted dialog text content

### Advanced

- **Wait for Dialog to Appear (Milliseconds)**`Integer`: Timeout period for waiting for the dialog to appear


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

