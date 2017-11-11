const path = require('path');

var express = require('express');

const domain = require('../domain/external-app');

class ExternalAppRoute {
  constructor() {
    this.router = express.Router();
    this.init();
  }

  init() {

    /* GET users listing. */
    this.router.get('/', function (req, res, next) {
      res.send('external-app');
    });


    /* GET users listing. */
    this.router.get('/open', function (req, res, next) {
      const path = req.query.path ? req.query.path : '';
      const file = req.query.file ? req.query.file : 'test.txt';
      const param = req.query.param ? req.query.param : '';

      domain.open(path, file, param).then(res => {
        res.json(res);
      }).catch(err => {
        res.status(500).json(err);
      });

    });

  }
}
const externalAppRoute = new ExternalAppRoute;
module.exports = externalAppRoute;
