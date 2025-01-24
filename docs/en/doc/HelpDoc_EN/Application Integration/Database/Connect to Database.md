---
title: Connect to Database
---

# Connect to Database

## Function Description

:::tip 
Select a database type to connect to the database
:::

## Configuration Item Description

### General

**Command Input**

- **Login Method`Integer`**: Select a login method

- **Database Charset`string`**: Please enter the database charset

- **Password`string`**: Please enter the database password

- **Username`string`**: Please enter the database username

- **Database`string`**: Please enter the database name

- **Port`Integer`**: Please enter the database connection port

- **Address`string`**: Please enter the database connection address

- **Connection String`string`**: Please enter the database connection string

- **Database Type`Integer`**: Select a database connection type


**Command Output**

- **Save Database Connection Object to`TDatabase`**: Specify a variable name that will store the database connection object


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

