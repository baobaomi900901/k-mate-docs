---
title: Handle Web Dialog
---

# Handle Web Dialog

## Function Description

:::tip 
Handle the confirm, prompt, and alert dialogs in a web page
:::

## Configuration Item Description

### General

**Command Input**

- **Input Content**`string`: The content to input when the dialog box appears

- **Dialog Button**`Integer`: The button that appears in the dialog box

- **Web Page Object**`TBrowser`: Input a web page object that is obtained or created by the 'Open Web Page' function


**Command Output**

No output for the current command

### Advanced

- **Wait for Dialog Appearance (milliseconds)**`Integer`: The maximum waiting time for the appearance of the dialog box


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

