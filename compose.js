function compose(...args) {
    return param => {
        let result = param;
        args.forEach(fn => {
                result = fn(result);
            }
            );
        return result;
    };
}

const superFunction = compose(arg => arg + 1, arg => arg + 2);

const res1 = superFunction(1);

const superPuper = compose(superFunction, arg => arg + 1, arg => arg + 2);

const res2 = superPuper(1);

console.log('result should be 4: ' + res1);
console.log('result should be 7: ' + res2);