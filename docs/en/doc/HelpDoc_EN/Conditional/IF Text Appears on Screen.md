---
title: IF Text Appears on Screen
---

# IF Text Appears on Screen

## Function Description

:::tip 
Check if the specified text appears on the screen. Before using, you need to install the text plugin or OCR plugin via [Settings] - [Plugin Center]
:::

## Configuration Item Description

### General

**Command Input**

- **Search Method**`Integer`: Specify whether the text is present or absent within the defined search range

- **Target Action**`TTarget`: Select a pre-recorded window element from the element list

- **Recognition Method**`Integer`: Recognition method

- **Search Range**`Integer`: You can choose the entire screen or a specific window

- **Text to Search**`string`: Enter the text you need to search for


**Command Output**

No output for the current command


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

