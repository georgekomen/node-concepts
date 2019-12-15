/**
 * The fs module provides simple file suystem IO functions to use with node
 * All fs functions have async and sync modes
 * You can pick either mode depending on your code logic
 * 
 * The two modes handle exceptions differently, the async uses the error first approach as it passes errors as the first argument in the callback
 * while the sync mode immediately throws any errors (you need to use try catch if you don't need the errors to bubble up)
 * 
 * The readFile method gives back a buffer if you don't specify the encoding
 */