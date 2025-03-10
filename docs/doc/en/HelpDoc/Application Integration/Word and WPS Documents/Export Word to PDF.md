---
title: Export Word to PDF
order: 2
---

# Export Word to PDF

## Function Description

:::tip 
Export a Word document as a PDF
:::

![Export Word to PDF](../../../assets/Export%20Word%20to%20PDF_command.png)

## Configuration Item Description

### General

**Command Input**

- **Word Object**`TDocumentApplication`: Enter a Word object created by the 'Open or Create Word' function

- **Export Range**`Integer`: Provide various Word export range options

- **Start Page**`Integer`: Enter the start page number for exporting to PDF. Page numbering starts from 1

- **End Page**`Integer`: Enter the end page number for exporting to PDF. Page numbering starts from 1

- **Save PDF To**`string`: Enter the file name to save the exported PDF

- **Overwrite if File Exists**`Boolean`: Overwrite the file if it exists. If the PDF save path does not exist, it will be created automatically


**Command Output**

No output for the current command

### Advanced

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

