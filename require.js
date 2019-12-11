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