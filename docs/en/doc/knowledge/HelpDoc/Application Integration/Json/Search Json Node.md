---
title: Search Json Node
---

# Search Json Node

## Function Description

:::tip 
Search a Json node by path
:::

## Configuration Item Description

### General

**Command Input**

- **Special Characters**`Boolean`: Check this box if the Key contains certain special characters.

- **New Search**`Boolean`: Use the new search to search arrays

- **Search Path**`string`: Use \ to separate multiple levels of nodes

- **Json Object**`TJson`: Json Object


**Command Output**

- **Node Value**`string`: Specify a variable to store the node value

- **Node Object**`TJson`: Node Object


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

