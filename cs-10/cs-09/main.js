const { Request, method } = require('./httpRequest');
let url = require('./url');

function httpRequest(domain, method) {
  let request = new Request(domain, method);
  request.connect();
}

let request = httpRequest;

// request(url.hani, method.GET); // no resoponse
request(url.disney, method.GET); // 200
// request(url.khan, method.GET); // no response
// request(url.yes24, method.GET); // 301
// request(url.kyobobook, method.GET); // 200
