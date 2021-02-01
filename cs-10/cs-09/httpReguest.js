let dns = require('dns');
let net = require('net');

const url = {
  hani: 'www.hani.co.kr',
  disney: 'www.disney.co.kr',
  khan: 'www.khan.co.kr',
  yes24: 'www.yes24.com',
  kyobobook: 'www.kyobobook.co.kr',
};

async function kuku() {
  let dodo = await new Promise((resolve, reject) => {
    dns.resolve(url.disney, (err, addresses) => {
      return resolve(addresses);
    });
  }).then((value) => {
    return value;
  });
  // console.log(dodo);
  return dodo;
}

let result = kuku();
console.log(result);

const getIP = (url) => {
  dns.resolve(url, (err, addresses) => {
    if (err) {
      console.log(err);
    }

    // console.log(`${url}: ${addresses}`);
  });
  // return url;
};

const ip = getIP;
console.log(ip(url.disney));
console.log(ip(url.hani));
console.log(ip(url.khan));
console.log(ip(url.yes24));
console.log(ip(url.kyobobook));

class Request {
  constructor(url) {
    this.url = url;
  }
  GET() {}
  requestMsg() {}
}

// const disneyRequest = new Request();
// console.log(disneyRequest);

// Accept, Cookie, Content-Type, Content-Length, If-Modified-Since

// let socket = new net.Socket();
// let getConnect = socket.connect(80, url.kyobobook);
// console.log(getConnect);

const look = (url) => {
  let arr = [];
  let a = dns.lookup(url, async (err, address, family) => {
    await arr.push(address);
  });
  console.log(a);
  return arr;
};

const address = look(url.khan);
console.log(address);

const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise1.then((value) => {
  return value;
});
