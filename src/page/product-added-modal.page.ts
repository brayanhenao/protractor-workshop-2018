import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private modal: ElementFinder;

  constructor() {
    this.modal = $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.modal));
    await this.modal.click();
  }
}
