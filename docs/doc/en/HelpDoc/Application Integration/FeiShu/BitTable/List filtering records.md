---
title: List filtering records
order: 20
---

# List filtering records

## Function Description

:::tip 
List and filter all records in the view in the data table
:::

![List filtering records](../../../../assets/List%20filtering%20records_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

- **Data Table**`string`: Enter the name or ID of the data table

- **View**`string`: Pass in the view name or view ID

- **Filter information**`string`: Pass in a JSON string of filtering information, refer to how to fill in the filter parameter in the query record interface of Feishu Open Platform for details

- **Display Fields**`string`: The result contains field names in the format of field name 1, field name 2, and field name 3

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

