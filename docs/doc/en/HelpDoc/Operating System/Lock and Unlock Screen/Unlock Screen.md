---
title: Unlock Screen
order: 2
---

# Unlock Screen

## Function Description

:::tip 
Unlock the system screen and enter the system screen
:::

![Unlock Screen](../../../assets/Unlock Screen_command.png)

## Configuration Item Description

### General

**Command Input**

- **Username**`string`: Please enter your username

- **Login Password**`string`: Please enter your login password

- **Domain**`string`: Please enter the login domain, or leave it blank


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

