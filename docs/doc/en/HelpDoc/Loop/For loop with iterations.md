---
title: For loop with iterations
order: 1
---

# For loop with iterations

## Function Description

:::tip 
Perform a specified number of iterations on a set of instructions
:::

![For loop with iterations](../../assets/For%20loop%20with%20iterations_command.png)

## Configuration Item Description

### General

**Command Input**

- **Start number**`Integer`: Set the starting value for the loop counter

- **End number**`Integer`: Set the end value for the loop counter

- **Step size**`Integer`: Set the increment value after each iteration


**Command Output**

- **Save current loop item to**`Integer`: Enter a name for the variable that will store the current loop value. Starting from the initial value, this variable's value will change with each iteration

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

