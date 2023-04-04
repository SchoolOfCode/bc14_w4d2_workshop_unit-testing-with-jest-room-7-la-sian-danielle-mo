/*
cd into the part-3 folder and run npm i to install dependencies. A test script has already been set up for you (in package.json), so you shouldn't need to do anything else other than the steps below.
You can use npm run test (or just npm t) to run the tests.
As a team, read and understand the functions already written in calculator.js.
Then plan and write tests (in calculator.test.js) to add confidence that the functions work as expected. Write at least one test per function.
For example, you could write a test that checks whether the add function returns 3 when passed 1 and 2 as arguments.
Similarly, you could write a test that checks whether multiply returns 8 when passed 2 and 4 as arguments.
It'd be a good idea to test each function more than once with differing arguments. For example, if you've tested that add(1, 2) returns 3, maybe also test whether add returns the correct answer for a different set of arguments. This gives your team confidence that the same function works, even when handed different arguments.*/

import { test, expect } from '@jest/globals';
import {
	add,
	subtract,
	multiply,
	divide,
	square,
	calculate,
} from './calculator.js';
// test add function
test('sum of two numbers', () => {
	expect(add(4, 8)).toBe(12);
});
// test subtract function
test('subtract number from another', function () {
	expect(subtract(5, 2)).toBe(3);
});

test('multiplying two numbers', () => {
	expect(multiply(5, 3)).toBe(15);
});

//  test divide function
test('divide two numbers', () => {
	expect(divide(8, 2)).toBe(4);
});

//  test square function
test('square one number', () => {
	expect(square(9)).toBe(81);
});

// test calculate for different operators
test('calculate: add two numbers', () => {
	expect(calculate('+', 4, 7)).toBe(11);
});

test('calculate: subtract a number from another', () => {
	expect(calculate('-', 14, 2)).toBe(12);
});

test('calculate: multiply two numbers', () => {
	expect(calculate('*', 3, 5)).toBe(15);
});

test('calculate: divide two numbers', () => {
	expect(calculate('/', 20, 2)).toBe(10);
});

test('calculate: square a number', () => {
	expect(calculate('sq', 5)).toBe(25);
});

test('calculate: wrong operator gives error message', () => {
	expect(() => {
		calculate('z');
	}).toThrow(`Unsupported operator z`);
});
