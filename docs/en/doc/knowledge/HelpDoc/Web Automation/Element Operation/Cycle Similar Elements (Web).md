---
title: Cycle Similar Elements (Web)
---

# Cycle Similar Elements (Web)

## Function Description

:::tip 
Iterate through each item in the similar element list on the web page for automated operations.
:::

## Configuration Item Description

### General

**Command Input**

- **Output Loop Position**`Boolean`: Whether to output the position of the loop item.

- **Attribute Name**`string`: The attribute name of the web page element.

- **Intelligently Identify and Supplement Address Prefix (http:// or https://)**`Boolean`: Intelligent identification and supplementation of address prefix.

- **Element Operation**`Integer`: Information about the obtained element.

- **Operation Target**`TTarget`: Select the web page element to be operated on.

- **Web Page Object**`TBrowser`: Input a captured or created web page object using the 'Open Web Page' function.


**Command Output**

- **Save Current Loop Position To**`Integer`: Save the count of obtained similar elements.

- **Save Current Loop Item To**`TUiElement`: Specify a variable name to store the current loop item information.

### Advanced

- **Wait for Element to Exist (Milliseconds)**`Integer`: Timeout for waiting for the existence of the target associated element.

- **Loop End Position**`Integer`: Loop end position, -1 is the last item.

- **Loop Start Position**`Integer`: Loop start position, 0 is the first item.


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

