---
title: Get Filtered Cookies
order: 6
---

# Get Filtered Cookies

## Function Description

:::tip 
Retrieve all cookies from a single Cookie store that match the given criteria
:::

![Get Filtered Cookies](../../../assets/Get%20Filtered%20Cookies_command.png)

## Configuration Item Description

### General

**Command Input**

- **Browser Type**`Integer`: Set the type of browser cookies to filter

- **Cookie URL**`string`: URL filter condition

- **Cookie Name**`string`: Leave blank for any name

- **Cookie Domain**`string`: Defaults to the domain part of the URL, ignore for host-only cookies

- **Cookie Path**`string`: Defaults to the path part of the URL, leave blank if not applicable

- **Cookie Key**`string`: Leave blank for any key


**Command Output**

- **Save Cookie List To**`string`: Save the retrieved cookie list

### Advanced

- **Filter by Cookie's Secure attribute**`Boolean`: Filter by Cookie's Secure attribute

- **Only Secure Cookies**`Boolean`: Set whether the cookie is marked as HttpOnly, default is False

- **Filter by Cookie's lifecycle**`Boolean`: Default setting is session cookies, uncheck for persistent cookies

- **Only Session Cookies**`Boolean`: Filter session cookie collection

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

