const entry: number[] = [3, 4, -1, 1];
const entry2: number[] = [1, 2, 0];


const getFirstMissingPositive = (integers: number[]): number => {
    integers.sort()
    let firstMissingPositive = 1
    while (integers.includes(firstMissingPositive)) {
        firstMissingPositive++
    }
    return firstMissingPositive
}


const getFirstMissingPositiveAlt = (integers: number[]): number => {
    let firstMissingPositive = 1
    integers.sort()
    for (let integer of integers) {
        if (integer === firstMissingPositive) {
            firstMissingPositive++
        }
    }
    return firstMissingPositive
}

console.log(getFirstMissingPositive(entry))
console.log(getFirstMissingPositive(entry2))
