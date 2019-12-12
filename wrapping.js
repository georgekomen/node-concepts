/**
 * exports.a = 10; // this will work
 * 
 * exports = { a: 10 } // this will not work
 * 
 * module.exports = { a: 10 } // this is also ok
 * 
 * Reason:
 * export is a variable reference to module
 * it is similar to:
 * let exports = module.exports;
 * 
 * That is how js reference objects work everywhere and not just in this context
 */


 /**
 * var a = 10 // this is a local variable to the current file
 * 
 * WHY??
 * 
 * Because every node.js file is wrapped withing the node wrapper function so every top level variable is scoped within this
 * function
 * 
 * You can inspect this function by typing:
 * require('module').wrapper
 * in a repl session
 * 
 * OUTPUT:
 * Proxy [ [ '(function (exports, require, module, __filename, __dirname) { ',
    '\n});' ],
  { set: [Function: set],
    defineProperty: [Function: defineProperty] } ]
 */


 /**
  * What is the output of typing 
  * console.log(arguments)
  * in the top level of a .js file
  * 
  * ANSWER:
  * the wrapper function arguments, that is : exports, require, module, __filename, __dirname
  */