---
title: Get Associated Element (Web)
order: 9
---

# Get Associated Element (Web)

## Function Description

:::tip 
Get the associated element (parent, child, adjacent) of an element in a specified web page.
:::

![Get Associated Element (Web)](../../../assets/Get%20Associated%20Element%20(Web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Enter a web page object that is either obtained or created by the 'Open Web Page' function.

- **Operation Target**`TTarget`: Select the web element you want to operate on.

- **Association Type**`Integer`: Choose the type of association.

- **Child Element Retrieval Method**`integer`: Choose the method for retrieving child elements.

- **Child Element Position**`Integer`: The index position in the parent element, starting from 0.

- **Adjacency Direction**`integer`: Choose the direction of adjacency.


**Command Output**

- **Save Web Element To**`TUiElement`: Specify a variable to save the obtained element object to.

- **Save Element List To**`TList<TUiElement>`: Specify a variable to save the list of obtained element objects to.

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

