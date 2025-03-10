---
title: Open Message Dialog
order: 1
---

# Open Message Dialog

## Function Description

:::tip 
Open a message dialog
:::

![Open Message Dialog](../../../assets/Open%20Message%20Dialog_command.png)

## Configuration Item Description

### General

**Command Input**

- **Dialog Title**`string`: Dialog title

- **Dialog Content**`string`: Dialog content

- **Dialog Buttons**`Integer`: Select dialog buttons

- **Default Selected Button**`Integer`: Select a default button

- **Automatically click default button after timeout**`Boolean`: Automatically click the default button when the dialog exceeds the specified time without user interaction

- **Timeout in milliseconds**`Integer`: Set the time in milliseconds for the dialog to automatically close if no user action is taken


**Command Output**

- **Button Name**`string`: Specify a variable name to save the name of the pressed button

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

