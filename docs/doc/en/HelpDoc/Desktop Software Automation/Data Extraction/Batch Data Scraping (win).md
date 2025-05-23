---
title: Batch Data Scraping (win)
order: 5
---

# Batch Data Scraping (win)

## Function Description

:::tip 
Scrape batch data from the target window, commonly used for scraping list pages, detail pages, and multi-page data by setting the pagination button.
:::

![Batch Data Scraping (win)](../../../assets/Batch%20Data%20Scraping%20(win)_command.png)

## Configuration Item Description

### General

**Command Input**

- **Window Object**`TWinObj`: Enter the window object

- **Operation Target**`TTarget`: Table element to be scraped

- **Number of Pages to Extract**`Integer`: Choose how many pages of data to extract

- **Next Page Button**`TTarget`: Pagination element

- **Number of Pages**`Integer`: Maximum pages to scrape

- **Save to Data Table**`Boolean`: Whether to save the results to a data table


**Command Output**

- **Save Batch Data to**`TDataTable`: Save the retrieved batch data to a table

### Advanced

- **Custom Column Name**`string`: Custom column names, separated by commas.

- **Page Turn Interval (milliseconds)**`Integer`: Interval between page turns

- **Simulate Manual Click on Next Page Button**`Boolean`: Simulate a manual click event

- **Send Window Messages**`Boolean`: Send window messages to trigger the click

- **Automatically Scroll to the Bottom of the Page**`Boolean`: Automatically scroll to load the page before scraping, can be disabled

- **Simulate Page Turn Delay**`Boolean`: Simulate the delay during a real person's page turn

- **Minimum Delay Duration (milliseconds)**`Integer`: Shortest wait time after execution

- **Maximum Delay Duration (milliseconds)**`Integer`: Longest wait time after execution

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution

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

