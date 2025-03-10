---
title: OpenAI Img
order: 2
---

# OpenAI Img

## Function Description

:::tip 
Use prompt text to instruct AI to create an image.
:::

![OpenAI Img](../../../assets/OpenAI%20Img_command.png)

## Configuration Item Description

### General

**Command Input**

- **Prompt Text**`string`: Enter the prompt text

- **Image Size**`Integer`: Choose the image size to generate


**Command Output**

- **Save the result to**`string`: Specify a variable to store the Base64 encoded text of the generated image

### Advanced

- **Proxy Parameters**`string`: When our program cannot directly connect to the target network but the other party has installed a proxy server, format as Address:Port

- **DelayBefore(milliseconds)**`Integer`: The waiting time before instruction execution

- **Timeout (milliseconds)**`Integer`: Maximum waiting time (milliseconds)

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

