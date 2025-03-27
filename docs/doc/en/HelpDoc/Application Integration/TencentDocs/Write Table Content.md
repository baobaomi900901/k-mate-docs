---
title: Write Table Content
order: 4
---

# Write Table Content

## Function Description

:::tip 
Write content to the table at the specified location
:::

![Write Table Content](../../../assets/Write%20Table%20Content_command.png)

## Configuration Item Description

### General

**Command Input**

- **Document**`TDocument`: 

- **Pattern**`Integer`: Write mode：Cell，Row，Column，Region

- **Region**`string`: Area for writing data，format：Cell：A1；Row：1；Column：A，fill in the top left cell of the region

- **ArrayRow**`array of Variant`: Array to be written to table。If this property is set, then the CharacterList and DataTable property is ignored

- **CharacterList**`TList<String>`: List of strings to be written to the table。If this property is set, then the DataTable property is ignored

- **DataTable**`TDataTable`: 


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

