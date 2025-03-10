---
title: Set Cookie
order: 5
---

# Set Cookie

## Function Description

:::tip 
Set the cookie based on the specified cookie data, overwriting if an equivalent cookie exists
:::

![Set Cookie](../../../assets/Set%20Cookie_command.png)

## Configuration Item Description

### General

**Command Input**

- **URL Setting Method**`Integer`: The source of the Cookie URL setting value; you can choose to enter manually. If a webpage object is selected, the webpage URL will be used automatically.

- **Webpage Object**`TBrowser`: Enter a webpage object that has been obtained or created by the 'Open Webpage' function.

- **Browser Type**`Integer`: Set the type of browser for the cookie.

- **Cookie URL**`string`: The URL associated with the cookie setting, which affects the default Domain and Path of the created cookie.

- **Cookie Name**`string`: If the Cookie name is ignored, it will be empty.

- **Cookie Value**`string`: If the Cookie value is ignored, it will be empty.

- **Cookie Domain**`string`: The domain part of the URL by default, ignored to make the cookie host-only.

- **Cookie Path**`string`: The path part of the URL by default, ignored to leave it blank.

- **Mark as HttpOnly**`Boolean`: Set whether the cookie is marked as HttpOnly, default is false.

- **Mark as Secure**`Boolean`: Set whether the cookie is marked as Secure, default is false.

- **Set as Session Cookie**`Boolean`: Default is to set a session cookie, uncheck to set a persistent cookie.

- **Cookie Expiration (seconds)**`Integer`: Persistent cookies need to set an expiration time (the time interval from when the cookie takes effect to when it expires, in seconds), default is 100 seconds.


**Command Output**

No output for the current command

### Advanced

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

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

