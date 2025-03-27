---
title: Open or Create Excel
order: 1
---

# Open or Create Excel

## Function Description

:::tip 
Open an existing Excel file or create a new one to automate Excel operations
:::

![Open or Create Excel](../../../assets/Open%20or%20Create%20Excel_command.png)

## Configuration Item Description

### General

**Command Input**

- **Launch Method**`Integer`: Choose whether to create a new Excel file or open an existing one

- **Driver Method**`Integer`: Choose the driver method for creating or opening an Excel file

- **Excel File Path**`string`: Enter or select the path of the Excel file to open

- **Visible**`Boolean`: This option does not affect the automation capabilities of Excel, it only controls whether the operations are visible to the user. If operating Excel in non-visual mode, Excel must be closed after saving.


**Command Output**

- **Save Excel Object to**`TWorkbookApplication`: Specify a variable to store the Excel object. This Excel object can be used for automation operations on Excel.

### Advanced

- **Open Password**`string`: Password used to open the encrypted Excel file

- **Edit Password**`string`: Password used to edit the encrypted Excel file

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

