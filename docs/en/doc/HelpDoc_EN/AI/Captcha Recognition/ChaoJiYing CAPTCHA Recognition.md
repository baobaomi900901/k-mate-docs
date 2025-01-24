---
title: ChaoJiYing CAPTCHA Recognition
---

# ChaoJiYing CAPTCHA Recognition

## Function Description

:::tip 
Call the ChaoJiYing AI API for CAPTCHA recognition
:::

## Configuration Item Description

### General

**Command Input**

- **Error return score`Boolean`**: Report that the recognition result of a specific image ID is incorrect to the server, which will return the points or attempts to the user.

- **CAPTCHA Type`Integer`**: Select the captcha type to identify

- **Image File`string`**: Enter or select the image path


**Command Output**

- **Result`string`**: Specify a variable to store the result

### Advanced

- **Software ID`string`**: Software ID, defaults to reading the configuration file

- **User password`string`**: User password, defaults to reading the configuration file

- **User account`string`**: User account, defaults to reading the configuration file

- **Proxy parameters`string`**: Proxy server, format: address:port


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

