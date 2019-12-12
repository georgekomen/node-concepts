/**
Modularity
 - require is a global node fn
 - sequence:
  - resolving
  - loading
  - wrapping
  - evaluating
  - caching

- you can require a module without executing it e.g. `const re = require.resolve('lodash');`
- you can require a folder that within has a index.js file for loading
- if you want to load a specific file other than index.js, use package.json file to specify that file e.g. 
{
    "name": "find-me",
    "main": "start.js"
}

- you can also specify the absolute path of a package you want to require e.g. `const re = require('../lodash');`
 */

 /**
  * You can require something.js , something.json or something.node (c++ addons) file
  * For c++ addons to be required, you first have to compile .cc files to .node which is the file that you can include in your js code
  */


  /**
   * Required modules are cached so importing a file twice won't import the second one e.g. 
   * 
   * require(h.js);
   * require(h.js);
   * 
   * The actual import happens in the first line only, the second import won't execute because it was already cached
   * 
   * To peek on all cached modules, type:
   * console.log(require.cache)
   * 
   * You can delete cache with:
   * delete require.cache['array of paths to cached files']
   * or
   * require(h.js)();
   * require(h.js)();
   * That is importing and executing immediately, that is if your file exports a function e.g.
   * module.exports=()=>{
   * return 10;
   * }
   */