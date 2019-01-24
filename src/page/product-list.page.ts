import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductListPage {
  private tshirtBuyButton: ElementFinder;

  constructor() {
    this.tshirtBuyButton = $('#center_column a[title="Add to cart"]');
  }

  public async buyTshirt(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.tshirtBuyButton)
    );
    await this.tshirtBuyButton.click();
  }
}
