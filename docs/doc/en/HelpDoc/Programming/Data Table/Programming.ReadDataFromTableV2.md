---
title: ReadDataFromTableV2
order: 3
---

# ReadDataFromTableV2

## Function Description

:::tip 

:::

![ReadDataFromTableV2](../../../assets/ReadDataFromTableV2_command.png)

## Configuration Item Description

### General

**Command Input**

- **DataTable**`TDataTable`: 

- **ReadWay**`Integer`: 

- **ReadRegion**`Integer`: 

- **CellRowName**`string`: 

- **CellColName**`string`: 

- **CellRowNum**`Integer`: 

- **CellColNum**`Integer`: 

- **RowName**`string`: 

- **ColName**`string`: 

- **RowNum**`Integer`: 

- **ColNum**`Integer`: 

- **AreaMode**`Integer`: 

- **AreaBeginRowName**`string`: 

- **AreaEndRowName**`string`: 

- **AreaBeginColName**`string`: 

- **AreaEndColName**`string`: 

- **RowNameExp**`string`: 

- **ColNameExp**`string`: 

- **AreaBeginRowNum**`Integer`: 

- **AreaEndRowNum**`Integer`: 

- **AreaBeginColNum**`Integer`: 

- **AreaEndColNum**`Integer`: 

- **RowNumExp**`string`: 

- **ColNumExp**`string`: 

- **IsListRes**`Boolean`: 

- **IsPreview**`Boolean`: 

- **IsPrintRes**`Boolean`: 


**Command Output**

- **ReadResult**`TDataTable`: 

- **ReadList**`TList<String>`: 

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

