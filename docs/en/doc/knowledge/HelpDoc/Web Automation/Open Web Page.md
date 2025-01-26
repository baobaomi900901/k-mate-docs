---
title: Open Web Page
---

# Open Web Page

## Function Description

:::tip 
Open a web page using a specified browser to achieve web automation
:::

## Configuration Item Description

### General

**Command Input**

- **URL**`string`: Enter the web address to open

- **Browser Type**`Integer`: Select the browser type. You need to install the corresponding browser plugin in [Settings]-[Plugin Center] to achieve automation. Additionally, if the browser installation path is not the default system drive, you need to set the installation path in advanced options.


**Command Output**

- **Save web page object to**`TBrowser`: This variable saves the web page object, which can be used for automating the web page

### Advanced

- **Command line arguments**`string`: Command line arguments, must be supported by the browser, can be empty

- **Browser installation path**`string`: The default is the system drive installation path. If the installation path is not default, please select the program path of the corresponding browser

- **Action after timeout**`Integer`: The action to perform after the page load times out

- **Load timeout (milliseconds)**`Integer`: The time to wait for the page to load before timing out (milliseconds)

- **Wait for the web page to load completely**`Boolean`: Whether to wait for the web page to load completely

- **Run without grabbing mouse and keyboard**`Boolean`: Perform subsequent operations on the web page using API methods, which will improve stability and avoid occupying the mouse and keyboard

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

