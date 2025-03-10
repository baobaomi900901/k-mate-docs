---
title: Cycle Similar Elements (Web)
order: 11
---

# Cycle Similar Elements (Web)

## Function Description

:::tip 
Iterate through each item in the similar element list on the web page for automated operations.
:::

![Cycle Similar Elements (Web)](../../../assets/Cycle%20Similar%20Elements%20(Web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Input a captured or created web page object using the 'Open Web Page' function.

- **Operation Target**`TTarget`: Select the web page element to be operated on.

- **Element Operation**`Integer`: Information about the obtained element.

- **Intelligently Identify and Supplement Address Prefix (http:// or https://)**`Boolean`: Intelligent identification and supplementation of address prefix.

- **Attribute Name**`string`: The attribute name of the web page element.

- **Output Loop Position**`Boolean`: Whether to output the position of the loop item.


**Command Output**

- **Save Current Loop Item To**`TUiElement`: Specify a variable name to store the current loop item information.

- **Save Current Loop Position To**`Integer`: Save the count of obtained similar elements.

### Advanced

- **Loop Start Position**`Integer`: Loop start position, 0 is the first item.

- **Loop End Position**`Integer`: Loop end position, -1 is the last item.

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout for waiting for the existence of the target associated element.

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

