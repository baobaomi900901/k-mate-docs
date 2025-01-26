---
title: OpenAI Audio
---

# OpenAI Audio

## Function Description

:::tip 
Recognize audio files and convert the audio into text
:::

## Configuration Item Description

### General

**Command Input**

- **Audio File**`string`: Enter the path of the audio file. Supported file types include m4a, mp3, webm, mp4, mpga, wav, mpeg, ogg, oga, and flac formats


**Command Output**

- **Save the result to**`string`: Specify a variable to store the returned text

### Advanced

- **Timeout (milliseconds)**`Integer`: Maximum wait time (milliseconds)

- **Proxy Parameters**`string`: Proxy server in the format Address:Port


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

