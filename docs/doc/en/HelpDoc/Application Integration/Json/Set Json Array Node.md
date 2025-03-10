---
title: Set Json Array Node
order: 7
---

# Set Json Array Node

## Function Description

:::tip 
Set a node to the Json array
:::

![Set Json Array Node](../../../assets/Set%20Json%20Array%20Node_command.png)

## Configuration Item Description

### General

**Command Input**

- **Json Object**`TJson`: Json Object

- **Node Object**`TJson`: Node Object

- **Node Index**`Integer`: Node Index

- **Append**`Boolean`: If true, append to the array, ignoring the 'Node Index'


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

