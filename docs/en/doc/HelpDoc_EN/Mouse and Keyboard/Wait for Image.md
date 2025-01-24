---
title: Wait for Image
---

# Wait for Image

## Function Description

:::tip 
Wait for the target image to appear or disappear before continuing the process
:::

## Configuration Item Description

### General

**Command Input**

- **Timeout (milliseconds)`Integer`**: Set the maximum wait time

- **Set timeout (milliseconds)`Boolean`**: Set the timeout duration for waiting, after which the process will continue automatically

- **Wait for all images to appear (or disappear) before continuing`Boolean`**: Wait for all images or wait for just one

- **Target Image`string`**: You can select multiple images from the image library, and the process will continue when one appears (or disappears)

- **sAllImages`string`**: 

- **Wait Method`Integer`**: Wait for the target image to appear or disappear

- **Window Object`TWinObj`**: Please select a window object

- **Search Range`Integer`**: Search range


**Command Output**

No output for the current command


**Command Output**

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

