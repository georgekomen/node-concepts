/**
 * Someone accidentaly ran a script that appended file's content to itself
 * Our task is to fix that
 * 
 * more files/file1.js //to read file contents
 */

 const fs = require('fs');
 const path = require('path');
 const dirname = path.join(__dirname, 'files');

 const files = fs.readFileSync(dirname);

 files.forEach(file => {
     const filePath = path.join(dirname, file);
     fs.stat(filePath, (err, stats) => {
         if (err) throw err;

         fs.truncate(filePath, stats.size/2, (err) => {
             if (err) throw err;
         });
     });
 });