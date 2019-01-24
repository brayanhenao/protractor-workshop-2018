import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private modal: ElementFinder;

  constructor() {
    this.modal = $('#layer_cart a[title="Proceed to checkout"]');
  }

  public async goToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.modal));
    await this.modal.click();
  }
}
