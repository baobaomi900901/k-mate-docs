---
title: Upload pictures on Feishu
order: 4
---

# Upload pictures on Feishu

## Function Description

:::tip 
Upload images from Feishu application to Feishu server
:::

![Upload pictures on Feishu](../../../assets/Upload%20pictures%20on%20Feishu_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Image type**`Integer`: Feishu image type, optional values include [message: used to send messages, avatar: Used for setting avatars

- **Image address**`String`: The local path of the image


**Command Output**

- **Image ID**`String`: The image ID returned after uploading is completed

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

