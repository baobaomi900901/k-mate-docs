---
title: Open or Create Word
order: 1
---

# Open or Create Word

## Function Description

:::tip 
Open an existing Word file or create a new one to automate Word operations
:::

![Open or Create Word](../../../assets/Open%20or%20Create%20Word_command.png)

## Configuration Item Description

### General

**Command Input**

- **Launch Method**`Integer`: Select whether to create a new Word file or open an existing one

- **Driver Method**`Integer`: Select the driver method

- **Word File Path**`string`: Enter or select the path of the Word file to open

- **Visible**`Boolean`: This option does not limit Word automation capabilities, it is used to control whether the operation is visible to the user. If running Word in non-visible mode, the Word file must be closed after saving


**Command Output**

- **Save Word Object To**`TDocumentApplication`: Specify a variable to save the Word object. This Word object can be used for Word automation operations

### Advanced

- **Open Password**`string`: Password used to open the encrypted Word file

- **Edit Password**`string`: Password used to edit an encrypted Word file

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

