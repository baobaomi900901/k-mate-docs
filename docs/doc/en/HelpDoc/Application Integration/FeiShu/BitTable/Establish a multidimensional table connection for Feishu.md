---
title: Establish a multidimensional table connection for Feishu
order: 1
---

# Establish a multidimensional table connection for Feishu

## Function Description

:::tip 
Initialize Feishu Multidimensional Table Application Object
:::

![Establish a multidimensional table connection for Feishu](../../../../assets/Establish%20a%20multidimensional%20table%20connection%20for%20Feishu_command.png)

## Configuration Item Description

### General

**Command Input**

- **Application ID**`String`: Unique ID identifier for the application

- **Application Key**`String`: Feishu application key

- **Unique identifier for multidimensional tables**`String`: Multi dimensional table vouchers, refer to the official website for obtaining methods


**Command Output**

- **Feishu Application Object**`TFeiShu`: Create a Feishu application object using the Feishu multidimensional table connection

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

