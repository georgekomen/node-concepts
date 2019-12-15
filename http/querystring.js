/**
 * Node has a url module for working with urls
 * It has useful methods e.g. parse and format
 */

 // url.parse('https://www.pluralsight.com/search?q=buna')
 // output:
 /**
 url {
     protocol: 'https',
     slashes: true,
     auth: null,
     host: 'www.pluralsight.com',
     port: null,
     hostname: 'www.pluralsight.com',
     hash: null,
     search: '?q=buna',
     query: 'q=buna',
     pathname: '/search',
     path: '/search?q=buna',
     href: 'https://www.pluralsight.com/search?q=buna'
 }
 */

 // url.parse('https://www.pluralsight.com/search?q=buna', true) // parses the query string itself
 // output:
 /**
  url {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.pluralsight.com',
    port: null,
    hostname: 'www.pluralsight.com',
    hash: null,
    search: '?q=buna',
    query: [Object: null prototype] { q: 'buna' },
    pathname: '/search',
    path: '/search?q=buna',
    href: 'https://www.pluralsight.com/search?q=buna' 
  }
  * the inverse of this is url.format(Object) which will give us back the query
  *
  * if you are only interested in  the query string then use querystring.parse or querystring.format
  */