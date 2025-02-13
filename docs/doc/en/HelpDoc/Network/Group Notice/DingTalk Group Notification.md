---
title: DingTalk Group Notification
---

# DingTalk Group Notification

## Function Description

:::tip 
Send content to DingTalk group
:::

## Configuration Item Description

### General

**Command Input**

- **@Everyone**`Boolean`: @Everyone

- **@Someone**`String`: Enter the phone number bound to the member you want to @, for multiple members, switch to programming mode and input a list of numbers, like ['PhoneNumber1', 'PhoneNumber2']

- **MarkDown Content**`string`: MarkDown content

- **Text Content**`string`: Text content

- **Message Format Type**`Integer`: Message type and data format

- **Secret Key**`string`: The string starting with SEC shown under the signature section on the bot security settings page

- **Bot Address**`string`: The bot's web address, i.e., WebHook, needs to be applied for separately


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

