const path = require('path');
const child_process = require('child_process');
const crypto = require('crypto')

const fs = require('fs-extra');

const root = require('./root');

const fileBasePath = path.resolve(root, 'tmp', 'external-app');

class ExternalApp {
  constructor() {
    this.fileList = [];
  }

  calcSHA256File(file) {
    fs.ensureDir(fileBasePath).then(() => {

      return new Promise((s, t) => {

        const hash = crypto.createHash('sha256')
        const input = fs.createReadStream(path.resolve(fileBasePath, file));
        hash.update(input); // FIXME: FIXME

        const digest = hash.digest('base64')

        s(digest);
      });

    })

  }
}

const externalApp = new ExternalApp;
module.exports = externalApp;
