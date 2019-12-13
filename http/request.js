/**
 * There are 5 major classes in node's http module
 * 1.) http.Server // for creating the basic server and inherits from the net.Server (EventEmitter)
 * 2.) http.IncomingMessage
 * 3.) http.Agent // for managing polling sockets used in http requests, node uses a default global agent but we can create a new one with different configuration
 * 4.) http.ClientRequest // for initiating an http request
 * 5.) http.ServerResponse // gets created internally by an http server
 * 
 * both http.ServerResponse and http.ClientRequest implement the WrittableStream interface
 * http.IncomingMessage implement the ReadableStream interface
 */

 
 const http = require('http'); // or https

 // req: http.ClientRequest
 const req = http.request(
     { hostname: 'www.google.com'},
     (res) => {
         // res: http.IncomingMessage
         console.log(res.statusCode);
         console.log(res.headers);

         res.on('data', (data) => {
             console.log(data.toString()) // converts buffer to string
         });
     }
 );

 req.on('error', (e) => console.log(e));

 req.end();

 console.log(req.agent) // http.Agent