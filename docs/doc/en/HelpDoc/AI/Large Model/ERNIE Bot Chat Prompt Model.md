---
title: ERNIE Bot Chat Prompt Model
---

# ERNIE Bot Chat Prompt Model

## Function Description

:::tip 
Used to retrieve the content of templates from the Prompt project
:::

## Configuration Item Description

### General

**Command Input**

- **Variable Value**`string`: The value corresponding to the variable inserted into the Prompt template

- **Variable Name**`string`: The name of the variable inserted into the Prompt template

- **Template ID**`integer`: Enter the Prompt template ID, which can be obtained by creating a template on the Baidu Smart Cloud Qianfan Large Model Platform


**Command Output**

- **Save the returned result to**`string`: Specify a variable to store the returned text

### Advanced

- **Proxy Parameters**`string`: Proxy server in the format Address:Port

- **Timeout (milliseconds)**`Integer`: Maximum wait time (milliseconds)


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

