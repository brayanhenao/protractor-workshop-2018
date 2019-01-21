import { Config, browser } from 'protractor';
import { reporter } from './helper/reporter';

export const config: Config = {
  capabilities: {
    browserName: 'safari'
  },
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 10000,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
