const person1 = {
    name: 'Denis',
    surname: 'Kondakov'
};

const person2 = {
  name: 'Vasya',
  surname: 'Pupkin'
};

function greeting(wStart, wEnd) {
    console.log(`${wStart} ${this.name} ${this.surname}! ${wEnd}`);
}

const bind = (fn, context, ...bindArgs) => (...args) => fn.apply(context, [...bindArgs, ...args]);

result = bind(greeting, person1, 'Hi');

result('Welcome!');

result2 = bind(result, person2);

result2('See you!');