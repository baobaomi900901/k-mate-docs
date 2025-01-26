---
title: Open DateTime Dialog
---

# Open DateTime Dialog

## Function Description

:::tip 
Open DateTime Dialog
:::

## Configuration Item Description

### General

**Command Input**

- **End Time**`string`: End Time

- **Start Time**`string`: Start Time

- **Default Time**`string`: Default Time

- **Time Format**`Integer`: Time Format

- **Time Type**`Integer`: Time Type

- **Dialog Title**`string`: Dialog Title


**Command Output**

- **Save DateTime Result To**`TRPADictionary`: Specify a variable name to save the datetime result, return None if the user cancels the dialog, otherwise return a dict object

### Advanced

- **Dialog Explanation**`string`: Dialog Explanation


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

