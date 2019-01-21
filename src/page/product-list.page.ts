import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private tshirtBuyButton: ElementFinder;

  constructor() {
    this.tshirtBuyButton = $(
      '#center_column a.button.ajax_add_to_cart_button.btn.btn-default'
    );
  }

  public async buyTshirt(): Promise<void> {
    await this.tshirtBuyButton.click();
  }
}
