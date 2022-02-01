/**
 * SlowMath Library
 * Covalence, LLC
 */
let slowMath = (function() {
    const wait = (delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    };

    function add(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(+a + +b);
            } else {
                return Promise.reject(new Error(`Error adding values ${a} and ${b}.`));
            }
        });
    }

    function subtract(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(a - b);
            } else {
                return Promise.reject(new Error(`Error subtracting values ${a} and ${b}.`));
            }
        });
    }

    function multiply(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(a * b);
            } else {
                return Promise.reject(new Error(`Error multiplying values ${a} and ${b}.`));
            }
        });
    }

    function divide(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (+b === 0) {
                return Promise.reject(new Error('Cannot divide by zero.'));
            } else if (shouldResolve) {
                return Promise.resolve(a / b);
            } else {
                return Promise.reject(new Error(`Error dividing ${a} by ${b}.`));
            }
        });
    }

    function remainder(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (+b === 0) {
                return Promise.reject(new Error('Cannot divide by zero for remainder.'));
            } else if (shouldResolve) {
                return Promise.resolve(a % b);
            } else {
                return Promise.reject(new Error(`Error dividing ${a} by ${b} for remainder.`));
            }
        });
    }

    function negativeCheck(a, b) {
        return a > -1 && b > -1;
    }

    return { add, subtract, multiply, divide, remainder };
})();



function doMath() {
    slowMath.add(6, 2).then((v) => {
        console.log(v);
        return slowMath.multiply(v, 2)
      }).then((v) => {
        console.log(v);
        return slowMath.subtract(v, 3);
      }).then((v) => {
        console.log(v);
        return slowMath.add(v, 98);
      }).then((v) => {
        console.log(v);
        return slowMath.remainder(v, 2);
      }).then((v) => {
        console.log(v);
        return slowMath.multiply(v, 50);
      }).then((v) => {
        console.log(v);
        return slowMath.remainder(v, 40);
      }).then((v) => {
        console.log(v);
        return slowMath.add(v, 32);
      }).then((v) => {
        console.log(`The final result is ${v}`);
      }).catch((err) => {
        console.log(err);
      });
}

// doMath();

let doMath2 =  async () => {
    try {
        let res = await slowMath.add(6, 2);
        console.log(res);
        res = await slowMath.multiply(res, 2)
        console.log(res);
        res = await slowMath.subtract(res, 3);
        console.log(res);  
        res = await slowMath.add(res, 98);
        console.log(res);
        res = await slowMath.remainder(res, 2);
        console.log(res);
        res = await slowMath.multiply(res, 50);
        console.log(res);
        res = await slowMath.remainder(res, 40);
        console.log(res);
        res = await slowMath.add(res, 32);
        console.log(`The final result is ${res}`);
    } catch(err) {
        console.log(err);
    }
}


doMath2();