"use strict";
const numbers = [10, 15, 3, 7];
const target = 17;
const isTargetTheSumOfTwoNumbers = numbers.some((number) => numbers.includes(target - number));
console.log(isTargetTheSumOfTwoNumbers);
