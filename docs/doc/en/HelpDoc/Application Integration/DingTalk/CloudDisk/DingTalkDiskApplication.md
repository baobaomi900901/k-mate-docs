---
title: DingTalkDiskApplication
order: 1
---

# DingTalkDiskApplication

## Function Description

:::tip 
DingTalkDiskApplication
:::

![DingTalkDiskApplication](../../../../assets/DingTalkDiskApplication_command.png)

## Configuration Item Description

### General

**Command Input**

- **AppKey**`string`: App Key for internal enterprise applications

- **AppSecret**`string`: AppSecret for internal enterprise applications

- **UserID**`string`: The UserId of the user who operates the cloud disk


**Command Output**

- **DingTalkWorkbook**`TDingTalkDisk`: Return the created DingTalk Table object

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

