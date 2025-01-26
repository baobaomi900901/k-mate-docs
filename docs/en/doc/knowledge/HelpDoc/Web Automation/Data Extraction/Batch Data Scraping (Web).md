---
title: Batch Data Scraping (Web)
---

# Batch Data Scraping (Web)

## Function Description

:::tip 
Scrape batch data from web pages, commonly used for scraping list and detail pages, and can scrape multiple pages of data by setting pagination buttons
:::

## Configuration Item Description

### General

**Command Input**

- **Save to Data Table**`Boolean`: Whether to save the results to the data table

- **Number of Pages**`Integer`: The maximum number of pages to scrape

- **Next Page Button**`TTarget`: Pagination element

- **Number of Pages to Extract**`Integer`: Number of Pages to Extract

- **Operation Target**`TTarget`: The table element to be scraped

- **UiBrowser**`TBrowser`: 


**Command Output**

- **Save Batch Data To**`TDataTable`: Save the batch data obtained from the web page

### Advanced

- **Maximum Pause Duration (milliseconds)**`Integer`: The longest waiting time after execution is complete

- **Minimum Pause Duration (milliseconds)**`Integer`: The shortest waiting time after execution is complete

- **Simulate Pause During Page Turning**`Boolean`: Simulate a real person's pause during page turning

- **Automatically Scroll to Bottom of Page**`Boolean`: Automatically scroll to load the page before scraping, can be cancelled

- **Send Window Messages**`Boolean`: Send window messages to click

- **Simulate Manual Click on Pagination Button**`Boolean`: Simulate a manual click event

- **Page Interval (milliseconds)**`Integer`: Time interval between page turns

- **Custom Column Names**`string`: You can customize the column names, separated by commas.


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

