/**
 * 現実
 */
const request = require('request');

const url = 'http://httpbin.org/ip';
const options =
  {
    strictSSL: false
  };
function func(err, res, body) {
  console.log(body);
};


function HttpClient() {
  request.defaults.apply(this, arguments);
}
HttpClient.prototype = Object.create(request);

HttpClient.prototype.altGet = (url, options, func) => {
  request.get(url, options, func);
}


const c1 = new HttpClient(options);
// c1(url, options, func); // => ERROR!
c1.get(url, options, func);
c1.altGet(url, options, func);
