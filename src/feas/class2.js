const request = require('request');

class HttpClient extends request.defaults {
  constructor() {
    super();
    console.log(this);
  }

  testRequest() {
    this.get('http://httpbin.org/ip', (err, res, body) => {
      console.log('HttpClient.testRequest', body);
    });
  }
}

const n1 = new HttpClient();
n1.testRequest();
n1.get('http://httpbin.org/ip', (err, res, body) => {
  console.log('get', body);
});

