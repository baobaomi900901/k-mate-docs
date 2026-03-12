---
title: Invoke Python
order: 2
---

# Invoke Python

- Supported OS: Windows / Xinchuang

## Overview

:::tip Description
Execute a specified Python script by providing either a file path or inline script content, with the option to pass in a list of input parameters.
:::

## Configuration

### General

**Input**

- **Parameters** `string`: A list of parameters to pass to the Python script. Must be provided in collection format, e.g. `[xxx, 'xxx']`. All items in the list must be of `string` type. Leave blank if no parameters are required.

- **Input Method** `Enum`: The method used to invoke the Python script. Supports the following two modes:
  - **File**: Invoke the script by specifying a file path.
    - **File Path** `string`: The full path to the Python script file to be executed.

  - **Script**: Invoke the script by entering the script content directly.
    - **Script** `string`: The Python script content to be executed.
    - **Input Encoding** `Enum`: The encoding format of the script content. Options: `Default` / `Ansi` / `UTF8` / `UTF16` / `UTF32`.

- **Class Name** `string`: The class name to invoke within the Python script.

- **Method Name** `string`: The method name to invoke within the Python script.

- **Output Encoding** `Enum`: The encoding format for the standard output of the script. Options: `Default` / `Ansi` / `UTF8` / `UTF16` / `UTF32`.

- **Error Encoding** `Enum`: The encoding format for the error output of the script. Options: `Default` / `Ansi` / `UTF8` / `UTF16` / `UTF32`.

**Output**

- **Result** `string`: The execution result of the Python script (variable: `_Result`).

- **Error Info** `string`: Any error messages produced during script execution (variable: `ErrorInfo`).

### Error Handling

- **Print Error Log** `Boolean`: When the command encounters an error, print the error log to the **Log** panel. Enabled by default.

- **Handling Mode** `Integer`:
  - **Terminate Process**: Terminate the process when the command encounters an error.

  - **Ignore Exception and Continue**: Ignore the exception and continue executing the process when the command encounters an error.

  - **Retry This Command**: Retry the command a specified number of times at a specified interval when the command encounters an error.

## Usage Example

N/A

## Common Errors and Solutions

N/A

## FAQ

N/A
