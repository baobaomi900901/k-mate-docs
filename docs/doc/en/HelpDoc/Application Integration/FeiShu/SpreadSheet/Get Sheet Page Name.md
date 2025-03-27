---
title: Get Sheet Page Name
order: 2
---

# Get Sheet Page Name

## Function Description

:::tip 
Get all worksheet names for the spreadsheet
:::

![Get Sheet Page Name](../../../../assets/Get%20Sheet%20Page%20Name_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu spreadsheet connection


**Command Output**

- **List of worksheet names**`TList<string>`: List of obtained worksheet names

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

