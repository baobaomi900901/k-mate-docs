---
title: Get Web Object List
order: 4
---

# Get Web Object List

## Function Description

:::tip 
Get the list of currently opened web objects to perform batch automation on each webpage
:::

![Get Web Object List](../../../assets/Get%20Web%20Object%20List_command.png)

## Configuration Item Description

### General

**Command Input**

- **Browser Type**`Integer`: Select the browser type. You need to install the corresponding browser plugin in [Settings]-[Plugin Center] to automate it

- **Matching Mode**`Integer`: Enter the web address you want to open

- **Title**`string`: Enter the title of the webpage you want to match, supports fuzzy matching

- **URL**`string`: Enter the webpage address you want to open

- **Match with Wildcards**`Boolean`: Match with wildcards


**Command Output**

- **Save Web Object List To**`TList<TUiElement>`: This variable saves the list of web objects, which can be used to automate the webpage

### Advanced

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

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

