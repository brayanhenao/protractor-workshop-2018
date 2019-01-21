import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmOrderText: ElementFinder;

  constructor() {
    this.confirmOrderText = $('#center_column > div > p > strong');
  }

  public async getOrderSummary(): Promise<string> {
    return await this.confirmOrderText.getText();
  }
}
