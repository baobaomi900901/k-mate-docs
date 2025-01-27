---
title: Query SQL Statement
---

# Query SQL Statement

## Function Description

:::tip 
Execute Select query SQL statement in the specified database
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout in milliseconds**`Integer`: Please enter the query timeout in milliseconds for the database

- **Database Query Statement**`string`: Enter the database query statement

- **Database Connection Object**`TDatabase`: Enter the database connection object


**Command Output**

- **Data Table**`TDataTable`: Specify a variable name that will store the query result from the database


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

