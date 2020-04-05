function compose(...args) {
    return param => {
        let result;
        args.forEach(fn => result = fn(result));
        return result;
    };
}