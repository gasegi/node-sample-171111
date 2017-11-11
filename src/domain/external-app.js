const path = require('path');

var express = require('express');

const infra = require('../infra/external-app');

class ExternalAppDomain {
  constructor() { }

  open(path, file, param = '') {
    return infra.calcSHA256File(file);
  }
}

const externalAppDomain = new ExternalAppDomain;
module.exports = externalAppDomain;
