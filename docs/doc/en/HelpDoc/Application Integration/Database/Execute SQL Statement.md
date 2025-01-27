---
title: Execute SQL Statement
---

# Execute SQL Statement

## Function Description

:::tip 
Execute SQL statements such as Insert, Update, Delete in the specified database
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout in milliseconds**`Integer`: Please enter the timeout in milliseconds for the database

- **SQL Execution Statement**`string`: Enter the SQL execution statement

- **Database Connection Object**`TDatabase`: Enter the database connection object


**Command Output**

- **Rows Affected**`Integer`: Specify a variable name that will store the number of rows affected by the database execution


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

