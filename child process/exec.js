/**
 * exec method creates a shell unlike spawn
 * That is the reason spawn is more efficient than exec
 * 
 * It also buffers the whole value output generated and passes it to a callback function
 * 
 * exec is a better choice if you need to use the shell syntax but spawn is good if the output of a command is big
 * because that data will be streamed with the standard IO objects
 * 
 * If you want to execute a file without using a shell then use execFile
 * It behaves exactly like exec but does not use shell
 */

 const { exec } = require('child_process');

 exec('find . -type f | wc -l', (err, stdout, stderr) => {
     if (err) {
         console.log(`exec error : ${err}`);
         return;
     }
     console.log(`Number of files ${stdout}`);
 });