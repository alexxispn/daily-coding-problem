(() => {
    const numbers: number[] = [1, 2, 3, 4, 5];

    // Without using division
    const getProductNumbers = (numbers: number[]): number[] => {
        let productNumbers: number[] = [];
        for (let number of numbers) {
            let product = 1;
            for (let number2 of numbers) {
                if (number !== number2) product *= number2;
            }
            productNumbers.push(product);
        }
        return productNumbers;
    }

    const getProductNumbersAlternative = (numbers: number[]): number[] => {
        let product = 1;
        for (let number of numbers) product *= number;
        return numbers.map(number => product / number);
    }

    console.log(getProductNumbers(numbers));
    console.log(getProductNumbersAlternative(numbers));
})();
