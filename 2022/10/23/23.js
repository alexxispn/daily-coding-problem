"use strict";
const entry = [3, 4, -1, 1];
const entry2 = [1, 2, 0];
const getFirstMissingPositive = (integers) => {
    integers.sort();
    let firstMissingPositive = 1;
    while (integers.includes(firstMissingPositive)) {
        firstMissingPositive++;
    }
    return firstMissingPositive;
};
const getFirstMissingPositiveAlt = (integers) => {
    let firstMissingPositive = 1;
    integers.sort();
    for (let integer of integers) {
        if (integer === firstMissingPositive) {
            firstMissingPositive++;
        }
    }
    return firstMissingPositive;
};
console.log(getFirstMissingPositive(entry));
console.log(getFirstMissingPositive(entry2));
