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
    return fs.ensureDir(fileBasePath).then(() => {

      return new Promise((s, t) => {

        const hash = crypto.createHash('sha256');
        const input = fs.createReadStream(path.resolve(fileBasePath, file));

        input.on('readable', () => {
          const data = input.read();
          if (data)
            hash.update(data);
          else {
            const digest = hash.digest('base64');
            console.log(digest);
            s(digest);
          }
        });

      });

    });
  }

  open(preParam, execPath, file, param) {
    const timer = new Date();
    return new Promise((s, t) => {
      console.log(`chcp 65001 > nul | ${preParam} "${execPath}" "${path.resolve(fileBasePath, file)}" ${param}`);
      child_process.exec(
        `chcp 65001 > nul | ${preParam} "${execPath}" "${path.resolve(fileBasePath, file)}" ${param}`,
        (err, stdout, stderr) => {
          if (err) {
            t(err);
          }
          else {
            s({
              stdout: stdout,
              time: new Date() - timer
            });
          }
        });
    });
  }

}

const externalApp = new ExternalApp;
module.exports = externalApp;
