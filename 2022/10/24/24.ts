(() => {

    interface Pair {
        car: number;
        cdr: number;
    }

    const cons = (a: number, b: number): Pair => ({car: a, cdr: b});
    const car = (pair: Pair) => pair.car;
    const cdr = (pair: Pair) => pair.cdr;


    if (car(cons(3, 4)) === 3 && cdr(cons(3, 4)) === 4) {
        console.log("Success");
    }


})();
