---
title: Fateadm CAPTCHA Recognition
---

# Fateadm CAPTCHA Recognition

## Function Description

:::tip 
Call Fateadm AI interface for CAPTCHA recognition
:::

## Configuration Item Description

### General

**Command Input**

- **Recognition Type**`Integer`: Select the captcha type to be recognized

- **Image File**`string`: Enter or select the image path


**Command Output**

- **Result**`string`: Specify a variable to store the result

### Advanced

- **Proxy parameter**`string`: Proxy server, format: address:port


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

