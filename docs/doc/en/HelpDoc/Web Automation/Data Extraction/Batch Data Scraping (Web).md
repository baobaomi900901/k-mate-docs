---
title: Batch Data Scraping (Web)
order: 11
---

# Batch Data Scraping (Web)

## Function Description

:::tip 
Scrape batch data from web pages, commonly used for scraping list and detail pages, and can scrape multiple pages of data by setting pagination buttons
:::

![Batch Data Scraping (Web)](../../../assets/Batch%20Data%20Scraping%20(Web)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Web Page Object**`TBrowser`: Input a web page object that is obtained or created by the 'Open Web Page' function

- **Operation Target**`TTarget`: The table element to be scraped

- **Number of Pages to Extract**`Integer`: Number of Pages to Extract

- **Next Page Button**`TTarget`: Pagination element

- **Number of Pages**`Integer`: The maximum number of pages to scrape

- **Save to Data Table**`Boolean`: Whether to save the results to the data table


**Command Output**

- **Save Batch Data To**`TDataTable`: Save the batch data obtained from the web page

### Advanced

- **Custom Column Names**`string`: You can customize the column names, separated by commas.

- **Page Interval (milliseconds)**`Integer`: Time interval between page turns

- **Simulate Manual Click on Pagination Button**`Boolean`: Simulate a manual click event

- **Send Window Messages**`Boolean`: Send window messages to click

- **Automatically Scroll to Bottom of Page**`Boolean`: Automatically scroll to load the page before scraping, can be cancelled

- **Simulate Pause During Page Turning**`Boolean`: Simulate a real person's pause during page turning

- **Minimum Pause Duration (milliseconds)**`Integer`: The shortest waiting time after execution is complete

- **Maximum Pause Duration (milliseconds)**`Integer`: The longest waiting time after execution is complete

- **Delay Before (ms)**`Integer`: The waiting time before instruction execution

- **TimeOut**`Integer`: 

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

