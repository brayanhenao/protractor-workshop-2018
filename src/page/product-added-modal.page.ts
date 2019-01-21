import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private modal: ElementFinder;

  constructor() {
    this.modal = $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckout(): Promise<void> {
    await this.modal.click();
  }
}
