# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @heronfeijao/lotide`

**Require it:**

`const _ = require('@heronfeijao/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first item in the array.
* `tail`: Returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `middle`: Take in an array and return the middle-most element(s) of the given array.
* `eqArrays`: Takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: Takes in two objects and returns true or false, based on a perfect match.
* `countLetters`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly`: Takes in a collection of items and return counts for a specific subset of those items.
* `findKey`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue`: Takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten`: Take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `letterPositions`: Returns all the indices (zero-based positions) in the string where each character is found.
* `map`: Returns a new array based on the results of the callback function.
* `takeUntil`: Will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without`: Returns a subset of a given array, removing unwanted elements.