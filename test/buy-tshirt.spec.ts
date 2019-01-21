import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage,
  SignInStepPage
} from '../src/page';

describe('Buy a t-shirt', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await browser.sleep(3000);

    await menuContentPage.goToTShirtMenu();
    await browser.sleep(3000);

    await productListPage.buyTshirt();
    await browser.sleep(3000);

    await productAddedModalPage.goToCheckout();
    await browser.sleep(3000);

    await summaryStepPage.proceedToCheckout();
    await browser.sleep(3000);

    await signInStepPage.login();
    await browser.sleep(3000);

    await addressStepPage.goToShipping();
    await browser.sleep(3000);

    await shippingStepPage.goToPayment();
    await browser.sleep(3000);

    await paymentStepPage.payOrder();
    await browser.sleep(3000);

    await bankPaymentPage.confirmOrder();
    await browser.sleep(3000);

    const text = await orderSummaryPage.getOrderSummary();
    expect(text).toBe('Your order on My Store is complete.');
  });
});
