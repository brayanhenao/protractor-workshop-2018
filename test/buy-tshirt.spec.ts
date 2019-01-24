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

describe('Given a shopping website', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('When you want to buy T-Shirts', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();

      await productListPage.buyTshirt('Faded Short Sleeve T-shirts');

      await productAddedModalPage.goToCheckout();

      await summaryStepPage.proceedToCheckout();
    });

    describe('And you are logged in', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();

        await signInStepPage.login();
      });

      describe('And you set the default shipping value', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();

          await addressStepPage.goToShipping();

          await shippingStepPage.goToPayment();
        });

        describe('And you select and pay with bank', () => {
          beforeAll(async () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

            await paymentStepPage.payOrder();

            await bankPaymentPage.confirmOrder();
          });

          it('Should bougth a t-shirt', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            expect(await orderSummaryPage.getOrderSummary()).toBe(
              'Your order on My Store is complete.'
            );
          });
        });
      });
    });
  });
});
