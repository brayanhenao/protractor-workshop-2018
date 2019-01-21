import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private paymentByWireButton: ElementFinder;

  constructor() {
    this.paymentByWireButton = $(
      '#HOOK_PAYMENT > div:nth-child(1) > div > p > a'
    );
  }

  public async payOrder(): Promise<void> {
    await this.paymentByWireButton.click();
  }
}
