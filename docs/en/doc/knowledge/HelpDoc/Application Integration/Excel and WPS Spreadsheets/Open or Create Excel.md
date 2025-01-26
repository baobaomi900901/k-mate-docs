---
title: Open or Create Excel
---

# Open or Create Excel

## Function Description

:::tip 
Open an existing Excel file or create a new one to automate Excel operations
:::

## Configuration Item Description

### General

**Command Input**

- **Auto Update External Links**`Boolean`: Automatically update external links. It is recommended to check the visual mode.

- **Ignore Formula**`Boolean`: Ignore the formulas in Excel and only read the formula results. If this option is checked, the file cannot be saved after opening to prevent loss of formulas.

- **Visible**`Boolean`: This option does not affect the automation capabilities of Excel, it only controls whether the operations are visible to the user. If operating Excel in non-visual mode, Excel must be closed after saving.

- **Excel File Path**`string`: Enter or select the path of the Excel file to open

- **Driver Method**`Integer`: Choose the driver method for creating or opening an Excel file

- **Launch Method**`Integer`: Choose whether to create a new Excel file or open an existing one


**Command Output**

- **Save Excel Object to**`TWorkbookApplication`: Specify a variable to store the Excel object. This Excel object can be used for automation operations on Excel.

### Advanced

- **Edit Password**`string`: Password used to edit the encrypted Excel file

- **Open Password**`string`: Password used to open the encrypted Excel file


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

