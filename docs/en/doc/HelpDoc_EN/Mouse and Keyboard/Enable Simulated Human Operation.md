---
title: Enable Simulated Human Operation
---

# Enable Simulated Human Operation

## Function Description

:::tip 
Simulate human-like behavior for multiple mouse operation commands (within the range from start to end)
:::

## Configuration Item Description

### General

**Command Input**

- **Maximum Pause Time (Milliseconds)**`Integer`: Longest wait time before executing

- **Minimum Pause Time (Milliseconds)**`Integer`: Shortest wait time before executing

- **Simulate Operation Pause**`Boolean`: Simulate human-like pause before the operation

- **Simulate Click on Element**`Boolean`: Simulate human-like click on an element at a random position

- **Simulate Mouse Movement**`Boolean`: Simulate human-like random route and speed for mouse movement


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

