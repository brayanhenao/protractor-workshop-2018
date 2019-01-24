import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class AddressStepPage {
  private adressNextStepButton: ElementFinder;

  constructor() {
    this.adressNextStepButton = $(
      '.cart_navigation button[name="processAddress"]'
    );
  }

  public async goToShipping(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.adressNextStepButton)
    );
    await this.adressNextStepButton.click();
  }
}
