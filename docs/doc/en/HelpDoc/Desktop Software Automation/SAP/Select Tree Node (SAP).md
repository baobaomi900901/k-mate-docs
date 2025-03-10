---
title: Select Tree Node (SAP)
order: 3
---

# Select Tree Node (SAP)

## Function Description

:::tip 
Expand the tree to display the target node, and then select the target node
:::

![Select Tree Node (SAP)](../../../assets/Select Tree Node (SAP)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: Enter a retrieved SAP session window

- **Tree Element**`TTarget`: Select the SAP tree element where the target node is located

- **Node Path**`string`: Node location path


**Command Output**

- **Target Node Element**`TUiElement`: Specify a variable to save the retrieved target node element object

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout for waiting for the target tree element to exist


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

