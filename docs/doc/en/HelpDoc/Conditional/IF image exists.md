---
title: IF image exists
order: 8
---

# IF image exists

## Function Description

:::tip 
Determine if the target image exists
:::

![IF image exists](../../assets/IF%20image%20exists_command.png)

## Configuration Item Description

### General

**Command Input**

- **Search range**`Integer`: You can choose the entire screen or a specified window

- **Window object**`TWinObj`: Select a window object

- **Condition for judgment**`Integer`: Specify if the target image exists or does not exist within the selected search range

- **Target image**`string`: You can choose multiple images from the image library

- **Execute after all images exist (or do not exist)**`Boolean`: Detect all images or detect one of the images


**Command Output**

No output for the current command

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

