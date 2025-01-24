---
title: IF Condition
---

# IF Condition

## Function Description

:::tip 
Start of condition judgment marker
:::

## Configuration Item Description

### General

**Command Input**

- **Ignore case`Boolean`**: If checked, it means that case is ignored during comparison

- **Blank character`Boolean`**: Includes empty strings, spaces, newlines, tab characters, page breaks, etc.

- **Empty string`Boolean`**: If unchecked, only empty strings are treated as empty values. If checked, empty strings, spaces, tab characters, newlines, page breaks, etc., are all considered empty values

- **None`Boolean`**: None

- **Object 2`string`**: Enter the variable, text, or number created by the previous instruction, to compare with Object 1

- **Relation`Integer`**: Select the comparison method between Object 1 and Object 2

- **Object 1`string`**: Enter the variable, text, or number created by the previous instruction, to compare with Object 2


**Command Output**

No output for the current command


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

