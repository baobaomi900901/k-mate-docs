---
title: Run or Open
---

# Run or Open

## Function Description

:::tip 
Run software, open software, open folder, open website, execute system commands, etc.
:::

## Configuration Item Description

### General

**Command Input**

- **Wait time**`Integer`: Maximum wait time

- **Wait timeout**`Boolean`: If unchecked, it means wait indefinitely

- **After command execution**`Integer`: Choose whether to continue executing commands or wait for program to finish, file to close

- **Path or Command**`string`: Open a program or file


**Command Output**

- **Save execution result to**`string`: Enter a name to save the execution result

### Advanced

- **Window Style**`Integer`: Specify how the new window should be displayed

- **Run as Administrator**`Boolean`: Whether to run as administrator

- **Working Directory (optional)**`string`: The working directory for the command in the process

- **Arguments (optional)**`string`: Additional arguments for program execution


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

