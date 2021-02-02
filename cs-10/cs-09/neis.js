const dns = require('dns');
const net = require('net');

const DEFAULT_BUFFER_SIZE = 8192;

class HttpHeaders {
  constructor() {
    this.content = [];
  }

  addHeader(name, value) {
    this.content.push(`${name}: ${value}`);
  }
  //addHeader(header) { this.content.push(header); }
  addHeaders(headers) {
    headers.split('\r\n').forEach((header) => this.content.push(header));
  }

  getContentLength() {
    for (const header of this.content) {
      const [name, value] = header.split(': ');

      if (name === 'Content-Length') return Number(value);
    }

    return null;
  }

  empty() {
    return this.content.length === 0;
  }
  toString() {
    return this.content.join('\r\n');
  }
}

class HttpResponse {
  constructor() {
    this.statusCode;
    this.responseLine;
    this.contentLength;
    this.receivedContentLength = 0;
    this.headers = new HttpHeaders();
    this.body;
  }

  init(dataStr) {
    const firstLineFeedIdx = dataStr.search(/\r\n/);
    this.responseLine = dataStr.slice(0, firstLineFeedIdx);
    dataStr = dataStr.slice(firstLineFeedIdx + 2);

    const firstDoubleLineFeedIdx = dataStr.search(/\r\n\r\n/);
    this.headers.addHeaders(dataStr.slice(0, firstDoubleLineFeedIdx));

    this.statusCode = this.responseLine.match(/[^\s]+/g)[1];
    this.contentLength = this.headers.getContentLength();
    this.body = this.contentLength ? Buffer.alloc(this.contentLength) : Buffer.alloc(DEFAULT_BUFFER_SIZE);

    return (dataStr = dataStr.slice(firstDoubleLineFeedIdx + 4));
  }

  write(dataStr) {
    let written = 0;

    while ((written = this.body.write(dataStr, this.receivedContentLength)) < dataStr.length) {
      this.receivedContentLength += written;
      dataStr = dataStr.slice(written);
      this.body = Buffer.concat([this.body, Buffer.alloc(DEFAULT_BUFFER_SIZE)]);
    }

    this.receivedContentLength += written;
  }

  receivedAll() {
    return this.contentLength && this.contentLength === this.receivedContentLength;
  }

  empty() {
    return this.headers.empty();
  }

  toString() {
    return `[HTTP Response header]\n${this.headers.toString()}\n\n` + `[HTTP Response Body]\n${this.body.toString()}`;
  }
}

class HttpRequest {
  constructor(url) {
    this.url = url;
    this.content;
    this.socket = new net.Socket();
    this.response = new HttpResponse();
    this._init();
  }

  connect(callback) {
    console.log(`URL ${this.url.href}`);
    console.log('(DNS Lookup...)');

    dns.lookup(this.url.hostname, (err, address) => {
      if (err) {
        console.error(err);
        process.exit();
      }

      this.socket.connect(80, address, () => {
        console.log(`TCP Connection: ${address} 80`);
        callback();
      });
    });
  }

  request(method, resource, httpVersion = '1.1') {
    const requestLine = `${method} ${resource} HTTP/${httpVersion}\r\n`;
    const headers = new HttpHeaders();
    headers.addHeader('Host', this.url.hostname);
    headers.addHeader('Accept', '*/*');
    headers.addHeader('Connection', 'keep-alive');
    headers.addHeader('Content-Length', 0);
    this.content = requestLine + headers.toString() + '\r\n\r\n';
    this.socket.write(this.content);
  }

  print() {
    console.log('\n' + this.toString());
    console.log('\n' + this.response.toString());
  }

  _init() {
    this.socket.on('data', this._onData.bind(this));
    this.socket.on('error', console.error);
  }

  _onData(data) {
    let dataStr = data.toString();

    if (this.response.empty()) dataStr = this.response.init(dataStr);

    this.response.write(dataStr);

    if (this.response.receivedAll() || dataStr.slice(dataStr.length - 5) === '0\r\n\r\n') {
      this.print();
      setTimeout(() => {
        this.socket.end();
      }, 3000);
    }
  }

  toString() {
    return `[HTTP Request]\n${this.content}`;
  }
}

function main() {
  const urls = [
    'http://www.hani.co.kr',
    'http://www.disney.co.kr',
    'http://www.khan.co.kr',
    'http://www.yes24.com',
    'http://www.kyobobook.co.kr',
  ];

  const httpRequest = new HttpRequest(new URL(urls[4]));
  httpRequest.connect(() => httpRequest.request('GET', '/'));
}

main();
