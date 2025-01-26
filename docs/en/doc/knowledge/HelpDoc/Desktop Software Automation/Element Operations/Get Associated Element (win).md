---
title: Get Associated Element (win)
---

# Get Associated Element (win)

## Function Description

:::tip 
Get the associated element of an element in the specified window (parent, child, adjacent elements)
:::

## Configuration Item Description

### General

**Command Input**

- **Adjacent direction**`integer`: Select the adjacent direction

- **Child element position**`Integer`: Index position within the parent element, starting from 0

- **Child element acquisition method**`integer`: Child element acquisition method

- **Association method**`Integer`: Select the association method for the element

- **Operation target**`TTarget`: Select the window element to operate on

- **Window object**`TWinObj`: Enter a captured window object


**Command Output**

- **Save window element list to**`TList<TUiElement>`: This variable is used to save the obtained element object list

- **Save window element to**`TUiElement`: This variable is used to save the obtained element object

### Advanced

- **Wait for element to exist (milliseconds)**`Integer`: Timeout for waiting for the target associated element to exist


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

