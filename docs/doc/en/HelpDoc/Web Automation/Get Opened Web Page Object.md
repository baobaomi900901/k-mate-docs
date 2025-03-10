---
title: Get Opened Web Page Object
order: 2
---

# Get Opened Web Page Object

## Function Description

:::tip 
Get a web page that is already open and matches the URL or title, or get the currently selected web page in the browser
:::

![Get Opened Web Page Object](../../assets/Get%20Opened%20Web%20Page%20Object_command.png)

## Configuration Item Description

### General

**Command Input**

- **Browser Type**`Integer`: Select the browser type, you need to install the corresponding browser plugin in [Settings]-[Plugin Center] to achieve automation

- **Matching Mode**`Integer`: Enter the web address you want to open

- **Title**`string`: Enter the web page title you want to match, supports fuzzy matching

- **URL**`string`: Enter the web page address you want to open

- **Match using wildcards**`Boolean`: Match using wildcards


**Command Output**

- **Save web page object to**`TBrowser`: This variable saves the web page object, which can be used to automate operations on the web page

### Advanced

- **Wait for the web page to load completely**`Boolean`: Whether to wait for the web page to load completely

- **Load timeout (milliseconds)**`Integer`: The time to wait for the page to load before timing out (milliseconds)

- **Action after load timeout**`Integer`: The action you want to perform after waiting for the page to load times out

- **Open a new web page if matching fails**`Boolean`: When matching the web page title or URL fails, open a new web page

- **New URL**`string`: The URL of the new web page to open

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

