const path = require('path');

var express = require('express');

const infra = require('../infra/external-app');

class ExternalAppDomain {
  constructor() { }

  open(preParam, execPath, file, param = '') {
    const local = {};

    return infra.calcSHA256File(file).
      then(hash => {

        local.hash = hash;
        return infra.open(preParam, execPath, file, param);

      }).then(result => {

        result.hash = local.hash;
        return Promise.resolve(result);

      });
  }

  watch(file, hash) {

    return infra.calcSHA256File(file).
      then(result => {

        return Promise.resolve({
          hash: hash,
          newHash: result,
          file: file
        });

      });
  }
}

const externalAppDomain = new ExternalAppDomain;
module.exports = externalAppDomain;
