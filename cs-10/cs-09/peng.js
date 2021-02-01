class Init {
  init() {
    var dns = require('dns');
    var arr = [];
    dns.lookup('www.disney.co.kr', function onLookup(err, address, family) {
      dns.reverse(address, function (err, hostnames) {
        if (err) {
          console.log(err.stack);
        }
        console.log('disney IP : ' + address);
        console.log(JSON.stringify(hostnames));
        arr.push(address);
        // console.log(arr);
      });
    });
    return arr;
  }
}
const list = new Init();
list.init();
