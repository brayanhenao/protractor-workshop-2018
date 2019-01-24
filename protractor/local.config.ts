import { Config, browser } from 'protractor';

import { reporter } from './helper/reporter';

export const config: Config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--disable-popup-blocking',
        '--no-default-browser-check',
        '--window-size=800,600'
      ],
      prefs: { credentials_enable_service: false }
    }
  },

  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 30000,

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
    browser
      .manage()
      .timeouts()
      .implicitlyWait(3000);
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
