---
title: FeiShu Group Notification
order: 3
---

# FeiShu Group Notification

## Function Description

:::tip 
Send content to FeiShu group
:::

![FeiShu Group Notification](../../../assets/FeiShu Group Notification_command.png)

## Configuration Item Description

### General

**Command Input**

- **Bot Address**`string`: The bot's web address, i.e., WebHook, needs to be applied for separately

- **Signature Verification**`string`: Signature verification in bot security settings; no input is needed if signature verification is not set

- **Message Format Type**`Integer`: Message type and data format

- **app_id**`string`: Obtain tenant_access_token, used in rich text messages and message cards

- **app_secret**`string`: Obtain tenant_access_token, used in rich text messages and message cards

- **Text Content**`string`: Text content

- **Rich Text Content**`string`: Supports using FeiShu's original format content. Refer to FeiShu's message documentation. If you need to @ someone using a phone number or email, you must be able to obtain the corresponding user_id based on the phone number or email

- **Message Card Content**`string`: Message cards are FeiShu's unique message format. You can use FeiShu's official message card builder tool to edit message cards

- **Image Path**`string`: Must not exceed 10MB, supports JPG and PNG formats


**Command Output**

No output for the current command

### Advanced

- **Delay Before(milliseconds)**`Integer`: The waiting time before instruction execution


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

