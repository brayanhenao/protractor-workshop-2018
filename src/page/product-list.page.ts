import { ElementFinder, browser, ElementArrayFinder, $$ } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;

  constructor() {
    this.products = $$('.product-container');
  }

  private findByProduct(productName): ElementFinder {
    return this.products
      .filter((tshirt: ElementFinder) =>
        tshirt
          .$('.right-block .product-name')
          .getText()
          .then(text => text.includes(productName))
      )
      .first();
  }

  public async buyTshirt(productName): Promise<void> {
    const selectedProduct = this.findByProduct(productName);

    await browser
      .actions()
      .mouseMove(selectedProduct.$('.product-image-container'))
      .perform();
    await selectedProduct.$('.ajax_add_to_cart_button.btn.btn-default').click();
  }
}
