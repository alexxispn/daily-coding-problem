"use strict";
(() => {
    const cons = (a, b) => ({ car: a, cdr: b });
    const car = (pair) => pair.car;
    const cdr = (pair) => pair.cdr;
    if (car(cons(3, 4)) === 3 && cdr(cons(3, 4)) === 4) {
        console.log("Success");
    }
})();
