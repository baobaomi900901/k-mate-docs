---
title: List View Records
order: 14
---

# List View Records

## Function Description

:::tip 
List all records in the view in the data table
:::

![List View Records](../../../../assets/List%20View%20Records_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: Enter the name or ID of the data table

- **View**`string`: Pass in the view name or view ID

- **Table Listing Method**`Integer`: You can choose to list records by table name or table ID

- **View Listing Method**`Integer`: You can choose to list records using either the view name or view ID


**Command Output**

- **Record ID List**`TList<string>`: List for storing record IDs

- **Record details**`string`: Detailed information of all records in this data table

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

