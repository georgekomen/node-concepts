- This is a simple codebase to document some important node concepts that every JS developer should be aware of to work effectively and comfortably with node

**what you need to know**
- perl mode
- tab and underscore
- node command line interface (node --v8-options | less)
- the 'process' object

**env variables**
$ NODE_DEBUG="http" node app.js - this would print out any incoming request in console

**custom env variables**
$ VAL1=10 VAL2=20 node app.js

<!-- app.js -->
console.log('val 1 is', process.env.VAL1);

- you can also export env variables using the export command prio to executing your script e.g. 
```
$ export VAL1=10
$ export VAL2=20
```

- you could also set env variables with 'process.argv' but will been a lot of tricks to name this variavles which is much easier to do with 'process.env'

**standard input/output streams**
- other properties to be aware of in the process object are the standard input output streams : stdin, stdout and stderr

-did you know: ```console.log('hey')``` is same as ```process.stdout.write('hey')```

- stdin can create an echo utility e.g.
```
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null) {
        process.stdout.write(chunk);
    }
});

// or you can achieve same thing with pipe function available for readable streams e.g stdin
// process.stdin.pipe(process.stdout)
```

- process exit
```
setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
    console.log('process will exit now');
});

console.log('this executes first because of js asynchrous nature');
```

**scope**
for(var i = 1; i <= 10; i++) {
    // block scope
}

$ i
11

use let instead to avoid exposing fields outsie their intended scopes

const an = 42; // immutable

const ob = {
    a: 32,
    b: 34
}
const num = [32, 34]
the above object is immutable but always point to the same array or object, to accomplish immutability for objects use Object.freeze()

**arrow functions**
const X = function() {
    // 'this' here is the caller of X
}

const Y = () => {
    // 'this' here is not the caller of Y
    // It's the same 'this' found in Y's scope
}

arrow functions are preffered because it behaves more predictable with closures and are also short
- it is also a big benefit when working with listeners in nodejs

**object literals**
```
const mystery = "answer";

const PI = Math.PI;

const obj = {
    p1: 10,
    p2: 20, // regular property syntax
    f1() {}, // shorter syntax
    f2: () => {}, // regular property syntax
    [mystery]: 42, // dynamic properties
    PI // shorter syntax, a short form of PI: PI
}
```

for dynamic properties, javascript will evaluate what is within the square brackets and make the result of that the new property name.

$ obj.mystery 
  undefined

$ obj.answer
  42
mystery was first evaluated to 'answer' which was then evalated to the value 42

- PI here is an example of defining an object with property names to map values that exist in the current scope with thesame name

**destructuring and rest/spread**
- destructuring works for both objects and arrays

example of object:

```
const PI = Math.PI;
const E = Math.E;
const SQRT2 = Math.SQRT2;
```
in destructuring syntax, this can be writen as:
```
const {PI, E, SQRT2} = Math;
```
it is useful when you want to use a few properties from a bigger object

more examples:
// with require
// const { readfile } = require('fs');

-destructuring also works inside functions arguments

```
const  circle = {
    label: 'circleX',
    radius: 2
};

const circleArea = ({ radius }, {precision = 2}={}) => (PI* radius * radius).toFixed(precision);

console.log(circleArea(circle))
console.log(circleArea(circle, {precision: 5}))
```
- {precision = 2}={} // this means the default value of precision is 2 and the whole param is optional

const [fist, second,,forth] = [10,20,30,40];

const [first, ...restOfItems] = [10,20,30,40] // remove the first item and assign it to 'first'. Take the rest of the remaining items and create a new array with name 'restOfItems'

- thesame thing happens for objects i.e.
```
const data ={
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe'
};

const { temp1, temp2, ...person} = data;

const newObjt = {
    ...person,
};
```

**template string**
const st = `hey ${Math.random()} there`;

**classes**
**promises, async and await**