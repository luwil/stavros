'use strict';

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/basictest.js'],
  capabilities: {
    browserName: 'firefox'
  },
  jasmineNodeOpts: {
    isVerbose: true,
  }
}
