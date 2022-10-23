const numbers_given: number[] = [10, 15, 3, 7];
const target: number = 17;

const isTargetTheSumOfTwoNumbers = numbers_given.some((number) => numbers_given.includes(target - number));
console.log(isTargetTheSumOfTwoNumbers);
