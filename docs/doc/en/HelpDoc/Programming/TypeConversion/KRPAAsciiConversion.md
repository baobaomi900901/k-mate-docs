---
title: KRPAAsciiConversion
order: 2
---

# KRPAAsciiConversion

## Function Description

:::tip 
Can convert ACSII code to characters or binary, hexadecimal, or convert characters to ACSII code
:::

![KRPAAsciiConversion](../../../assets/KRPAAsciiConversion_command.png)

## Configuration Item Description

### General

**Command Input**

- **iConvert**`Integer`: Choose ACSII conversion method

- **ASCIIValue**`Integer`: Enter ACSII key values from 0 to 255

- **StrValue**`string`: Input the value that needs to be converted to ACSII


**Command Output**

- **KeyValue：**`string`: Output results through ACSII code conversion

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

