import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private paymentByWireButton: ElementFinder;

  constructor() {
    this.paymentByWireButton = $('a.bankwire');
  }

  public async payOrder(): Promise<void> {
    await this.paymentByWireButton.click();
  }
}
