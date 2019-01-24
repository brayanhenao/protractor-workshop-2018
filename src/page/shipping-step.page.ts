import { $, ElementFinder, browser } from 'protractor';

export class ShippingStepPage {
  private tosCheckbox: ElementFinder;
  private shippingNextStepButton: ElementFinder;

  constructor() {
    this.tosCheckbox = $('#cgv');
    this.shippingNextStepButton = $('button[name="processCarrier"]');
  }

  public async goToPayment(): Promise<void> {
    await this.tosCheckbox.click();
    await browser.sleep(3000);
    await this.shippingNextStepButton.click();
  }
}
