import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmOrderText: ElementFinder;

  constructor() {
    this.confirmOrderText = $('.cheque-indent');
  }

  public async getOrderSummary(): Promise<string> {
    return await this.confirmOrderText.getText();
  }
}
