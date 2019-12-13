/**
 * modern way of handling async code
 * 
 * allows us chain methods instead of nesting them
 * 
 * allows us handle errors and success separately with .then and .catch
 */

 // this is an example of code that supports both callback and promise interface

 const fs = require('fs');
 const readFileAsArray = function(file, cb = () => {}) {
     return new Promise((resolve, reject) => {
         fs.readFile(file, function(err, data) {
             if (err){
                 reject(err);
                 return cb(err);
             };

             const lies = data.toString().trim().split('/n');
             resolve(lines);
             cb(null, lines);
         });
     });
 };

 // you can then consume this either with promisses or with callbacks

 /**
  * async and await enables us write code in a linear manner
  * 
  * to handle errors however, you need to wrap the code in a try catch block
  * 
  * so the above code can be consumed with callbacks, promisses and async await features in js
  * 
  */