---
title: Get Opened Web Page Object
---

# Get Opened Web Page Object

## Function Description

:::tip 
Get a web page that is already open and matches the URL or title, or get the currently selected web page in the browser
:::

## Configuration Item Description

### General

**Command Input**

- **Match using wildcards**`Boolean`: Match using wildcards

- **URL**`string`: Enter the web page address you want to open

- **Title**`string`: Enter the web page title you want to match, supports fuzzy matching

- **Matching Mode**`Integer`: Enter the web address you want to open

- **Browser Type**`Integer`: Select the browser type, you need to install the corresponding browser plugin in [Settings]-[Plugin Center] to achieve automation


**Command Output**

- **Save web page object to**`TBrowser`: This variable saves the web page object, which can be used to automate operations on the web page

### Advanced

- **New URL**`string`: The URL of the new web page to open

- **Open a new web page if matching fails**`Boolean`: When matching the web page title or URL fails, open a new web page

- **Action after load timeout**`Integer`: The action you want to perform after waiting for the page to load times out

- **Load timeout (milliseconds)**`Integer`: The time to wait for the page to load before timing out (milliseconds)

- **Wait for the web page to load completely**`Boolean`: Whether to wait for the web page to load completely

- **Do not grab mouse and keyboard during runtime**`Boolean`: Perform subsequent operations on the web page using API methods, which will improve stability and avoid occupying the mouse and keyboard


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

