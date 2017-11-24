/**
 * 理想
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


class HttpClient extends request.defaults {
  constructor(options) {
    super(options);
  }

  altGet(url, options, func) {
    request.get(url, options, func);
  }
}


const i1 = new HttpClient(options);
// i1(url, options, func); // => ERROR!
// i1.get(url, options, func); // => ERROR!
// i1.altGet(url, options, func); // => ERROR!
