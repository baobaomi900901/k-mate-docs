---
title: Search Json Node
order: 12
---

# Search Json Node

## Function Description

:::tip 
Search a Json node by path
:::

![Search Json Node](../../../assets/Search%20Json%20Node_command.png)

## Configuration Item Description

### General

**Command Input**

- **Json Object**`TJson`: Json Object

- **Search Path**`string`: Use \ to separate multiple levels of nodes

- **New Search**`Boolean`: Use the new search to search arrays

- **Special Characters**`Boolean`: Check this box if the Key contains certain special characters.


**Command Output**

- **Node Object**`TJson`: Node Object

- **Node Value**`string`: Specify a variable to store the node value

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

