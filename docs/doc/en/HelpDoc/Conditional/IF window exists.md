---
title: IF window exists
---

# IF window exists

## Function Description

:::tip 
Check if the specified window exists
:::

## Configuration Item Description

### General

**Command Input**

- **Window existence**`Integer`: Select whether to check if the window exists or does not exist

- **Window handle**`Integer`: Enter a window handle

- **Match by wildcard**`Boolean`: Whether to enable wildcard matching, which determines if common wildcards are used as regular characters or as wildcards. For example, when selected, ‘*Notepad’ matches windows whose titles end with ‘Notepad’

- **Window type**`string`: Select or enter the window type. Typically used when multiple windows have the same title and cannot be distinguished by title alone

- **Add window type**`Boolean`: Whether to add a window type

- **Window title**`string`: Select or enter the window title

- **Target**`TTarget`: Capture a new element or select a previously recorded window element from the list

- **Window object**`TWinObj`: Pass in a window object obtained through the 'Get Window Object' function

- **Get window method**`Integer`: Select the method to get the window


**Command Output**

No output for the current command

## Usage Example

Process logic description:

## Common Errors and Handling

None

## Frequently Asked Questions

None

