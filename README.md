# String Calculator TDD Kata

## Overview

This project is an implementation of the **String Calculator** kata using **TypeScript** with a **Test-Driven Development (TDD)** approach. The goal is to develop a simple calculator that can sum up numbers provided as a string input while ensuring the code evolves through rigorous testing. 

## Project Structure


## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Noel-Fredrick-au19/string-calculator.git
   cd string-calculator

2. Install dependencies:
   npm install

3. Run tests:
   npx jest
   
Implementation Details
String Calculator
The StringCalculator class provides a method to add numbers provided as a string with the following capabilities:

Input: A string of comma-separated numbers
Output: An integer representing the sum of the numbers
Handles an empty string, returning 0.
Handles new lines between numbers (e.g., "1\n2,3").
Supports different delimiters as specified (e.g., "//;\n1;2").
Throws an exception for negative numbers, listing all of them.


Test Cases
1. Test for a single number:
$ npx jest
 PASS  tests/StringCalculator.test.ts
 StringCalculator
   √ should return the sum of one number (2 ms)

2. Test for an empty string:
$ npx jest
  PASS  tests/StringCalculator.test.ts
  StringCalculator
  √ should return the sum of one number (2 ms)
  √ should return 0 for an empty string (1 ms)

3. Test for handling new lines between numbers:
$ npx jest
 PASS  tests/StringCalculator.test.ts
 StringCalculator
   √ should return the sum of one number (2 ms)
   √ should return 0 for an empty string
   √ should handle new lines between numbers

4. Test for handling different delimiters:
$ npx jest
 PASS  tests/StringCalculator.test.ts
 StringCalculator
   √ should return the sum of one number (1 ms)
   √ should return 0 for an empty string (1 ms)
   √ should handle new lines between numbers
   √ should handle different delimiters

5. Test for throwing an exception for negative numbers:
$ npx jest
 PASS  tests/StringCalculator.test.ts
 StringCalculator
   √ should return the sum of one number (2 ms)
   √ should return 0 for an empty string
   √ should handle new lines between numbers (1 ms)
   √ should handle different delimiters
   √ should throw an exception for negative numbers (6 ms)

6. Test for listing all negative numbers in the exception:
$ npx jest
 PASS  tests/StringCalculator.test.ts
 StringCalculator
   √ should return the sum of one number (2 ms)
   √ should return 0 for an empty string (1 ms)
   √ should handle new lines between numbers
   √ should handle different delimiters
   √ should throw an exception for negative numbers (8 ms)
   √ should list all negative numbers in the exception (1 ms)

How to Run the Tests
npx jest

Tools and Libraries
TypeScript: For type-safe JavaScript development.
Jest: For unit testing.
Node.js: For JavaScript runtime.
TDD Approach
Start with writing a simple failing test case.
Write the minimal code to make the test pass.
Refactor the code for readability and efficiency.
Commit after each change to document the progress.

