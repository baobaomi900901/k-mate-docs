---
title: Get Similar Elements List (Web)
order: 10
---

# Get Similar Elements List (Web)

## Function Description

:::tip 
You can locate a set of similar elements on the web page through three methods: capturing the element, CSS, and XPath, and obtain their object or text information.
:::

![Get Similar Elements List (Web)](../../../assets/Get%20Similar%20Elements%20List%20(Web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Enter a web page object that has been obtained or created through the 'Open Web Page' function.

- **Positioning Method**`Integer`: Positioning Method

- **Operation Target**`TTarget`: Select the web element you want to operate on.

- **CSS Selector**`string`: CSS Selector

- **XPath Selector**`string`: XPath Selector

- **Related Parent Element**`Boolean`: Whether to associate with the parent element.

- **Parent Element**`TTarget`: Search for the target element within the parent element.

- **Element Operation**`Integer`: Information of the acquired element.

- **Intelligently Identify and Supplement Address Prefix (http:// or https://)**`Boolean`: Intelligently identify and supplement address prefix.

- **Attribute Name**`string`: The attribute name of the web element.

- **Output Similar Element Count**`Boolean`: Whether to output the count of similar elements.


**Command Output**

- **Save Similar Element List To**`TList<TUiElement>`: Save the list of similar elements obtained.

- **Save Similar Element List Information To**`TList<String>`: Save the information of the similar elements list obtained.

- **Save Similar Element Count To**`Integer`: Save the count of similar elements obtained.

### Advanced

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

- **Wait for Element to Exist (Milliseconds)**`Integer`: The timeout period for waiting for the target associated element to exist.

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

