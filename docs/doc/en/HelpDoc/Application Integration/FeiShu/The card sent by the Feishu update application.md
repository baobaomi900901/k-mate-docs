---
title: The card sent by the Feishu update application
order: 3
---

# The card sent by the Feishu update application

## Function Description

:::tip 
The message of updating the Feishu application card
:::

![The card sent by the Feishu update application](../../../assets/The%20card%20sent%20by%20the%20Feishu%20update%20application_command.png)

## Configuration Item Description

### General

**Command Input**

- **Feishu Application Object**`TFeiShu`: The Feishu application object created using the Feishu application scope

- **Information ID**`String`: The ID of the card information sent

- **Card Content**`String`: The JSON string that requires the input of card information can be found on the official website


**Command Output**

No output for the current command

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

