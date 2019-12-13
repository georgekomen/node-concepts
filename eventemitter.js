/**
 * event emitter is a module that facilitates communication between objects in node
 * 
 * It is at the core of node async event driven architecture
 */

 //structure

 const EventEmitter = require('events');

 class Logger extends EventEmitter{}

 const logger = new Logger();

 logger.on('event', () => {})

 logger.emit('event');

 // you can also emit an event with data e.g.:
 logger.on('event', (data) => {})

 logger.emit('event', data);

 /**
  * Observables in angular are based on events and thats why the call back can be fired multiple times the event is emitted
  * 
  */

  /**
   * when working with events, it is important to create a listener for errors
   * that way you will have handled any errors, without it your code will crash and exit and prevent execution of other lines
   * 
   * you can archive that with:
   * 
   * event.on('error', console.error);
   * 
   * or with:
   * 
   * process.on('uncaughtException', (err) => {
   *     console.log(err);
   *     process.exit();
   * });
   * or
   * process.once('uncaughtException', (err) => {
   *     console.log(err);
   *     process.exit();
   * });
   */

   /**
    * You can create multiple listeners for one event and they will be executed in order of declaration
    * e.g.
    *  logger.on('event', (data) => {})
    *  logger.on('event', (data) => {})
    * 
    * if you need a listener executed first before the other then use
    * 
    * logger.on('event', (data) => {})
    * logger.prependListener('event', (data) => {}) // will be executed before the above one
    * 
    * You can also remove a listener with:
    * logger.removeListerner('event')
    */