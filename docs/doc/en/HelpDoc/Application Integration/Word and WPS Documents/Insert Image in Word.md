---
title: Insert Image in Word
order: 10
---

# Insert Image in Word

## Function Description

:::tip 
Insert an image into a Word document
:::

![Insert Image in Word](../../../assets/Insert%20Image%20in%20Word_command.png)

## Configuration Item Description

### General

**Command Input**

- **Word Object**`TDocumentApplication`: Enter a Word object created using the 'Open or Create Word' function

- **Image Source**`Integer`: Select an image source

- **Image Path**`string`: Select the image path on your hard drive

- **Image Scale Percentage**`Integer`: The scaling percentage of the inserted image

- **Line break before inserting image**`Boolean`: If checked, a line break will be inserted before the image


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

