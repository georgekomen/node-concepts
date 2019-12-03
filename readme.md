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

- package-lock.json is for maintaining same version of packages downloaded in your application
- npm version : (breaking change.minor change.bugfix)
- ~ : latest bug fix(carret)
- ^ : latest minor and bug fix(tilder)

- eslint(airbnb)

**node file**
every node file if wrapped up with a function containing arguments:
```
// function(exports, module, require, __filename, __dirname) {
    let g = 0; // will not be a global variable
    console.log(arguments);

//  return module.exports;
// }
```
- exports & module - used to define API of the module, exports is an alias of module and shortens code. It will include all exports in the module and that becomes our api e.g. ```exports.a = 42 is same as module.exports.a = 42```
- require - used to require other modules
- __filename - has the path of this file
- __dirname - has the path to the folder hosting this file

- this wrapper function is the reason defning a variable on top level will only be available within that file unlike in browsers that don't have this hidden wrapping function

- note ```exports = () => {}``` will reassign the alias, not really modifying the module and that is not desirable but you can do : ```module.exports = () => {}```

**node gloabal object**
global keyname in node is equivalent to browser window object
```
global.val = 42; // you can access this from any other file within your package either as `global.val` or simply as `val`
```
- for example, setInterval is a global function

**node clusters**
node should be run in a cluster of nodes to avoid one node process exiting from exiting the whole app.
- all node processes should have a master process to monitor the rest
- you can run node clusters using the built in cluster module or using a tool like pm2 that wraps the cluster module
- pm2 will automatically use all the available cores in your server and will also spoon other processes while others crash, it also reloads application

**promisify**
- the downside of call backs is the need for nesting functions (pyramid of doom)
- callback vs promise pattern
- you can promisify any callback function using some library

```
const fs = require('fs');
fs.readFile(__filaname, (err, data) => {
    fs.writeFile(__filename+'.copy', (err)=>{
        //nest more
    })
})
```

to change this into a promise, you can do this:

```
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
async function main() {
    const data = await readFile(__filename);
    console.log('file data is', data);
    await fs.writeFile(__filename+'.copy', data);
}
main();
```

also fs supports built in promises so you can do this:

```
const fs = require('fs').promises;
async funtion main() {
    const data = await fs.readFile(__filename);
    await fs.writeFile(__filename+'.copy', data);
}
main();
```

**event emitters**
```
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

setImmediate(()=>{
    myEmmiter.emit('test');
});

myEmitter.on('test', () => {
    console.log('test event');
});

myEmitter.on('test', () => {
    console.log('test event');
});

myEmitter.on('test', () => {
    console.log('test event');
});
```