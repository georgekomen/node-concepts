/**
 * Console module/class can be used to write to any nodejs stream
 * 
 * There is also a global console object configured to work with stdout and stderr
 * 
 * This are two different things
 * 
 * with console class you can create an instance of it to write to e.g. a socket or a file as shown below
 */

 const fs = require('fs');

 const out = fs.createWriteStream('./out.log');
 const err = fs.createWriteStream('./err.log');

 const console2 = new console.Console(out, err);

 setInterval(function () {
     console2.log(new Date()); // writes to stdout
     console2.error(new Error('Whoops')); // writes to stderr
 }, 5000);


 /**
  * console.log uses util module under the wood e.g. 
  * 
  * console.log('One %s', 'thing'); // formats
  * 
  * if you want to use substitution without console logging anything then you can use util directly e.g.
  * 
  * util.format('One %s', 'thing')
  * 
  * console.log(module) // print object to stdout
  * util.inspect(module, { depth: 0 }) // returm string representation of an object, control depth
  * console.dir(module, { depth: 0 }) // print object to stdout while controlling depth
  console {
      log, info // alias
      error, warn // alias
  }
  * console.assert(3 === '3') // for assertions
  * console.trace behaves same as console.ifError but prints the call stack
  * console.time('id') and console.timeEnd('id') are used to start and stop timers. They report back the duration
  * 
  */