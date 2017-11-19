const request = require('request');

class HttpClient {
  constructor() {
    const r = request.defaults({});

  }

  testRequest() {
    this.get('http://httpbin.org/ip', (err, res, body) => {
      console.log('HttpClient.testRequest', body);
    });
  }
}

HttpClient.prototype = Object.assign(HttpClient.prototype, Object.create(request.defaults));
const n1 = new HttpClient();

n1.testRequest();
n1.get('http://httpbin.org/ip', (err, res, body) => {
  console.log('get', body);
});

