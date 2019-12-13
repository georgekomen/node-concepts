/**
 * Node concurrency model is based on multiple connections and the use of callbacks
 * This model is based on an event model which is organised by the event loop
 * 
 * Slow I/O operations are handled by event loop and callbacks so that they don't block the single threaded execution runtime
 */

 /**
  * The v8 call stack is simply a list of functions
  * A stack is a first in, last out simple data structure
  * In the case of node, it will be a list of functions with their parameters in the order of execution
  * because the last pushed function's return value would be needed in the calling function
  * 
  * When we have a function calling itself recursively then they are all pushed to the stack untill the maximum stack size is exceeded
  * 
  * 
  * A long for loop is a blocking code in node
  */

  /**
   * Any callbacks e.g. timers are timed at node which then pushes them to the queue once its their time elapses
   * The queue will push them to the stack once the stack is empty
   * 
   * This means the delay we specify in a timer is not guranteed but rather the minimum to execution
   */

   // difference between setTimeOut with 0 milliseconds and using setImmediate

   const fs = require('fs');

   fs.readFile(__filename, () => {
       setTimeout(() => {
           console.log('setTimeOut')
       }, 0);

       setImmediate(() => {
        console.log('setImmediate')
    });
   });

   /**
    * OUTPUT:
    * setImmediate
    * setTimeOut
    * 
    * So in summary, setImmediate takes preference over setTimeOut
    */

    /**
     * Node has a process.nextTIck api that is almost similar to setImmediate but does not next tick of the event loop so
     * its name is missleading but is likely to change
     * 
     * process.nextTick is not technically part of the event loop and does not follow it's process
     * 
     * Node processes operations with next tick after the completion of the current operation and before the event loop continues
     * 
     * A function can sometimes either be async or sync depending on the first line. You can use process.nextTick to have one contract
     * 
     * process.nextTick pushes a call back immediately after the current operation and before the event loop continues
     */

     /**
      * Node timers e.g. setTimeOut, setImmediate are node APIs that do not block the call stack
      * 
      * Node pushes its async operations as events to it's event queue and event loop monitors both the call stack and the queue
      * and dequeue callbacks from the event queue into the call stack which gives v8 back the control to execute the contents of those callbacks
      * 
      */