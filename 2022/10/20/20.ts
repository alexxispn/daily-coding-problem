(() => {
    const numbers: number[] = [10, 15, 3, 7];
    const target: number = 17;

    const isTargetTheSumOfTwoNumbers = numbers.some((number) => numbers.includes(target - number));
    console.log(isTargetTheSumOfTwoNumbers);
})();
