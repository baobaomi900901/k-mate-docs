---
title: IF Element Visible (Web)
---

# IF Element Visible (Web)

## Function Description

:::tip 
Check if the specified element is visible on the webpage
:::

## Configuration Item Description

### General

**Command Input**

- **Target Element`TTarget`**: Select the webpage element to check

- **Check if the element is`Integer`**: Specify the type of content you want to check, whether the element is visible or not

- **Web Object`TBrowser`**: Enter a web object obtained or created through the 'Open Webpage' function


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

