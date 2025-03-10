---
title: Save Word
order: 12
---

# Save Word

## Function Description

:::tip 
Save Word
:::

![Save Word](../../../assets/Save%20Word_command.png)

## Configuration Item Description

### General

**Command Input**

- **Word Object**`TDocumentApplication`: Enter a Word object created using the 'Open or Create Word' function

- **Save Type**`Integer`: Choose how to save the Word object created with 'Create Word' or 'Open Word'

- **Word File Path**`string`: Enter or select the path to the Word file to be saved

- **Overwrite if file exists**`Boolean`: If the file exists and overwrite is not selected, an error will be shown indicating the file already exists

- **Close After Saving**`Boolean`: Close after saving


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

