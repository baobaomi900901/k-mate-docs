---
title: Get Web Listening Results
order: 9
---

# Get Web Listening Results

## Function Description

:::tip 
Get Web Listening Results
:::

![Get Web Listening Results](../../../assets/Get%20Web%20Listening%20Results_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Object**`TBrowser`: Enter a web object obtained or created using the 'Open Webpage' function

- **Filter Resource Type**`Integer`: Get the type of web request being listened to


**Command Output**

- **Save Web Listening Results List**`string`: Save the obtained web listening results list

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

