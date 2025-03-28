---
title: Get Json Array Node
order: 8
---

# Get Json Array Node

## Function Description

:::tip 
Get a node from the Json array
:::

![Get Json Array Node](../../../assets/Get%20Json%20Array%20Node_command.png)

## Configuration Item Description

### General

**Command Input**

- **Json Object**`TJson`: Json Object

- **Node Index**`Integer`: Node Index


**Command Output**

- **Node Object**`TJson`: Node Object

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

