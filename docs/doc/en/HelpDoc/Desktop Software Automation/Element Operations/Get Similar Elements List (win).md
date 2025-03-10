---
title: Get Similar Elements List (win)
order: 9
---

# Get Similar Elements List (win)

## Function Description

:::tip 
You can locate a set of similar elements on the window through capturing elements, CSS, and XPath, and get their objects or text information.
:::

![Get Similar Elements List (win)](../../../assets/Get%20Similar%20Elements%20List%20(win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: Enter a captured window object.

- **Operation Target**`TTarget`: Select the window element that needs to be operated on.

- **Element Operation**`Integer`: Operate on element information.

- **Attribute Name**`string`: Element attribute name.

- **Output Similar Element Count**`Boolean`: Whether to output the count of similar elements.


**Command Output**

- **Save Similar Element Object List To**`TList<TUiElement>`: Save the list of obtained element objects.

- **Save Similar Element Information List To**`TList<String>`: Save the list of obtained element information.

- **Save Similar Element Count To**`Integer`: Save the count of obtained elements.

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

- **Wait for Element to Exist (ms)**`Integer`: Timeout time for waiting for the target associated element to exist.

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

