---
title: While condition loop
order: 2
---

# While condition loop

## Function Description

:::tip 
Conditional branch judgment, when the condition is true, performs a loop operation on a set of instructions
:::

![While condition loop](../../assets/While%20condition%20loop_command.png)

## Configuration Item Description

### General

**Command Input**

- **Object 1**`string`: Input the variable, text, or number created by the previous instruction, and compare it with Object 2

- **Relationship**`Integer`: Select the comparison method between Object 1 and Object 2

- **Object 2**`string`: Input the variable, text, or number created by the previous instruction, and compare it with Object 1

- **Whitespace**`Boolean`: Includes empty strings, spaces, newlines, tabs, page breaks, etc.

- **Ignore case**`Boolean`: If checked, case will be ignored during comparison


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

