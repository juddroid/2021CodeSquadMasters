let dns = require('dns');
let net = require('net');
let chalk = require('chalk');

const y = chalk.yellow;
const b = chalk.blue;
const r = chalk.red;
const g = chalk.green;
const m = chalk.magenta;
const w = chalk.white;

const method = {
  GET: 'GET',
  POST: 'POST',
};

class Request {
  constructor(domain, method) {
    this.domain = domain;
    this.method = method;
    this.socket = new net.Socket();
  }

  msgFisrtLine() {
    let firstLine = `${this.method} / HTTP/1.1\r\n`;
    return firstLine;
  }

  msgHeader() {
    let host = `HOST: ${this.domain.slice(4, this.domain.length)}\r\n\r\n`;
    let lang = `Accept-Language: kr\r\n`;
    let header = host;
    return header;
  }

  requestMsg() {
    let msg = `${this.msgFisrtLine()}${this.msgHeader()}`;
    console.log(r('[ HTTP Request ]'));
    console.log('');
    console.log(y(msg));
    console.log(m('============================================'));
    return msg;
  }

  connect() {
    dns.lookup(this.domain, (err, addresses) => {
      this.socket.connect(80, addresses, () => {
        console.log('');
        console.log(m('============================================'));
        console.log(b('CONNECTED TO SERVER!'));
        console.log(g(`URL: ${this.domain}`));
        console.log(`(DNS Lookup...)`);
        console.log(g(`TCP Connection: ${addresses} 80`));
        console.log('');

        this.socket.write(`${this.requestMsg()}`);

        this.socket.on('data', (data) => {
          console.log(data.toString().slice(0, 200));
        });

        // this.socket.on('end', () => {
        //   console.log('disconnected from server');
        // });
      });
    });
  }
}

module.exports = { Request, method };
