import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailInput: ElementFinder;
  private passwordInput: ElementFinder;
  private loginButton: ElementFinder;

  constructor() {
    this.emailInput = $('#email');
    this.passwordInput = $('#passwd');
    this.loginButton = $('#SubmitLogin');
  }

  public async login(): Promise<void> {
    await this.emailInput.sendKeys('aperdomobo@gmail.com');
    await this.passwordInput.sendKeys('WorkshopProtractor');
    await this.loginButton.click();
  }
}
