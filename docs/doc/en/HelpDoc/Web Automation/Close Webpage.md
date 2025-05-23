---
title: Close Webpage
order: 6
---

# Close Webpage

## Function Description

:::tip 
Close one or all open webpages
:::

![Close Webpage](../../assets/Close%20Webpage_command.png)

## Configuration Item Description

### General

**Command Input**

- **Operation**`Integer`: Choose to close a specified webpage or all webpages

- **Browser Type**`Integer`: Select the browser object to operate on

- **Terminate Browser Process**`Boolean`: If checked, it will forcibly end the specified browser process belonging to the current user and all its spawned child processes

- **Webpage Object**`TBrowser`: Enter a webpage object that has been obtained or created through the 'Open Webpage' function


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

