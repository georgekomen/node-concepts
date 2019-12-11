// process is an instance of event emitter

// process object provides a bridge between a node process and its running environment

/*
  Examples: 
  node -p "process.versions" - to read node version and its dependencies
  node -p "process.env" - get user env copy, same as env command in linux
  node -p "process.release.lts" - will be undefined if the current node version is not lts (long term support), this should be a red flag in production
*/

/*
  If you modify an env key from code it doesn't really modify the user env
  you should neighter read from env directly but use a configuration variable that you can export as an object of key pair values
  this also makes it possible to modify because it will modify that one exported module(object)
*/

/*
  Communicate with the environment using standard streams:
  - stdin - read
  - stdout - write
  - stderr - write any errors
  this are standard streams that you can't modify
*/

process.on('exit', (code) => {
    /*
      - will be executed when a node process has nothing else to do or when it is called manually with `process.exit()`
      you can't do any asynchronous operation here, you can't use the event loop here
      - you can however do a synchronous operation
      - you can't stop the process from exiting once you are here
    */

    console.log(`about to exit with code : ${code}`)
});

process.on('uncaughtException', (err) => {
    /*
      - emmited when any js exception is not handled and bubbles all the way to the event loop where node will print the
      stack trace and exit.
      - unlike the exit event, if you register an handler for 'uncaughtException' like we have done, node will not exit
      - to exit you have to call the exit event manually like below 'process.exit();'
      - you need to exit because your code has an issue that needs to be fixed
    */

    console.error(err);

    // force exit otherwise you continue with flawed code
    process.exit(1);
});

process.stdin.resume(); // keep the event loop busy

// trigger a typeError
console.dog();