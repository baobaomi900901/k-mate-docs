---
title: Get Filtered Cookies
---

# Get Filtered Cookies

## Function Description

:::tip 
Retrieve all cookies from a single Cookie store that match the given criteria
:::

## Configuration Item Description

### General

**Command Input**

- **Cookie Key**`string`: Leave blank for any key

- **Cookie Path**`string`: Defaults to the path part of the URL, leave blank if not applicable

- **Cookie Domain**`string`: Defaults to the domain part of the URL, ignore for host-only cookies

- **Cookie Name**`string`: Leave blank for any name

- **Cookie URL**`string`: URL filter condition

- **Browser Type**`Integer`: Set the type of browser cookies to filter


**Command Output**

- **CookieJsonStr**`string`: 

### Advanced

- **Only Session Cookies**`Boolean`: Filter session cookie collection

- **Filter by Cookie's lifecycle**`Boolean`: Default setting is session cookies, uncheck for persistent cookies

- **Only Secure Cookies**`Boolean`: Set whether the cookie is marked as HttpOnly, default is False

- **Filter by Cookie's Secure attribute**`Boolean`: Filter by Cookie's Secure attribute


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

