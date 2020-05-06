function compose(...args) {
    return param => {
        return args.reduce((result, fn)  => fn(result), param);
    };
}

const superFunction = compose(arg => arg + 1, arg => arg + 2);

const res1 = superFunction(1);

const superPuper = compose(superFunction, arg => arg + 1, arg => arg + 2);

const res2 = superPuper(1);

console.log('result should be 4: ' + res1);
console.log('result should be 7: ' + res2);