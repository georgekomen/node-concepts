/**
 * The cluster module can be used to enable load balancing over an environment
 * multiple cpu cores
 * It's based on the fork function and basically allows us to fork our main application process
 * as many times as we have cpu cores and then it will take over and load balance all requests to the main 
 * process accross all forked processes
 * It enables us implement the cloning scalability strategy but only on one machine
 * 
 * The master process uses round-robin algorithm to distribute load accross the forked processes on a rotational rythm
 * 
 * When using a process manager like PM2 cloning becomes as easy as providing an argument to the launch command
 * 
 * Each forked process has its own event loop and memory space
 */

 //example below shows how to fork processes, distibute requests and communicate between main and forked processes
 
const cluster = require('cluster');
const os = require('os');

let status = 0;

if(cluster.isMaster) {
    const cpus = os.cpus().length;
    console.log(`Forking for ${cpus} CPUs`);
    for(let i=0; i<cpus; i++){
        cluster.fork();
    }

    setInterval(() => {
        Object.values(cluster.workers).forEach(worker => {
            worker.send({ status: status++});
        });
    }, 1000);

} else {
    require('./server');
}