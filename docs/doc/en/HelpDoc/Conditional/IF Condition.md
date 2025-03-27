---
title: IF Condition
order: 1
---

# IF Condition

## Function Description

:::tip 
Start of condition judgment marker
:::

![IF Condition](../../assets/IF%20Condition_command.png)

## Configuration Item Description

### General

**Command Input**

- **Object 1**`string`: Enter the variable, text, or number created by the previous instruction, to compare with Object 2

- **Relation**`Integer`: Select the comparison method between Object 1 and Object 2

- **Object 2**`string`: Enter the variable, text, or number created by the previous instruction, to compare with Object 1

- **Blank character**`Boolean`: Includes empty strings, spaces, newlines, tab characters, page breaks, etc.

- **Ignore case**`Boolean`: If checked, it means that case is ignored during comparison


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

