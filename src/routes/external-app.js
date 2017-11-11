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
      const execPath = req.query.path ? req.query.path : `C:\\Program Files\\GIMP 2\\bin\\gimp-2.8.exe`;
      const file = req.query.file ? req.query.file : 'test.jpg';
      const param = req.query.param ? req.query.param : '';

      domain.open(execPath, file, param).then(result => {
        res.json(result);
      }).catch(err => {
        res.status(500).json(err);
      });

    });

  }
}
const externalAppRoute = new ExternalAppRoute;
module.exports = externalAppRoute;
