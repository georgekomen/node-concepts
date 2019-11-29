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