/**
 * The spawn method launches a command in a new process and we can use it to pass that command any arguments
 * 
 */
const { spawn } = require('child_process');

const child = spawn('pwd'); // child process instance which implements event emitter api meaning we can register handlers directly

//or const child = spawn('find', ['.', '-type', 'f']); // find . -type f 

// exit event
child.on('exit', (code, signal) => {
    // code is null if child process exits normally
    console.log(`child process exited with code: ${code}, signal ${signal}`)
});

child.stdout.on('data', (data) => {
    console.log(`child stdout : \n${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`child stdout : \n${data}`);
})

// other events:
/**
 * 1.) disconnect - when parent manually call's child process disconnect method
 * 2.) error - if the process could not be spawned or killed
 * 3.) message - when child sends message back to the parent
 * 4.) close - when the standard IO streams of a child process gets closed
 * 
 * close is different from exit as exit is per child process if several of them share same standard IO streams
 * child process exiting does not mean the stream got closed
 * 
 * Any child process gets 3 IO streams which can be accessed with 
 * 1.) child.stdin
 * 2.) child.stdout
 * 3.) child.stderr
 * 
 * Unlike in a normal process, the child.stdout and child.stderr are readable streams while child.stdin is a writeable stream.
 * This quite the opposite with the normal process
 * 
 * The events are standard though e.g. child.stdout.on('data', 
 */
