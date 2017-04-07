import { browser, element, by } from 'protractor';

export class Mc2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mc2-root h1')).getText();
  }
}
