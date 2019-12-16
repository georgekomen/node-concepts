/**
 * THIS IS THE BEST OF BOTH SPAWN AND EXEC
 * 
 * -It uses shell syntax and does not buffer the output
 * 
 * It is an example showing how you can use shell syntax and also inherit the standard IO objects of the parent
 * This way it inherits process.stdin, process.stdout and process.stderr
 */
const { spawn } = require('child_process');

const child = spawn('find . -type f', {
    stdio: 'inherit',
    shell: true,
    cwd: '/Users/komen/Downloads',
    env: { ANS: 2 },
    detached: true,
    stdio: 'ignore'
});

child.unref();