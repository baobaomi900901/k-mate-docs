---
title: Set Json Array Node
---

# Set Json Array Node

## Function Description

:::tip 
Set a node to the Json array
:::

## Configuration Item Description

### General

**Command Input**

- **Append**`Boolean`: If true, append to the array, ignoring the 'Node Index'

- **Node Index**`Integer`: Node Index

- **Node Object**`TJson`: Node Object

- **Json Object**`TJson`: Json Object


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

