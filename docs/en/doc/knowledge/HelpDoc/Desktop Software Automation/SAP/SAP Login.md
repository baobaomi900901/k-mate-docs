---
title: SAP Login
---

# SAP Login

## Function Description

:::tip 
SAP Login
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout**`Integer`: Timeout

- **Multiple Login Options**`Integer`: Multiple Login Options

- **Language**`string`: Language

- **Secure Password**`string`: Secure Password

- **Password**`string`: Password

- **Username**`string`: Username

- **Client**`string`: Client

- **Target**`TTarget`: Target


**Command Output**

- **SAP Session Window**`TUiElement`: Specify a variable to save the SAP session window


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

