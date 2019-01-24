import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class AddressStepPage {
  private adressNextStepButton: ElementFinder;

  constructor() {
    this.adressNextStepButton = $('#center_column > form > p > button > span');
  }

  public async goToShipping(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.adressNextStepButton)
    );
    await this.adressNextStepButton.click();
  }
}
