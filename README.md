# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dmitriyatsenko/lotide`

**Require it:**

`const _ = require('@dmitriyatsenko/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns 1st element of array
* `function2(tail)`: returns rest of array without 1st element
* `function3(middle)`: returns middle element(s) of array