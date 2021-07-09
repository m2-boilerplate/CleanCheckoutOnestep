define([
    'mage/utils/wrapper',
    'Magento_Checkout/js/model/quote',
    'Magento_Customer/js/model/customer',
    'Magento_Checkout/js/model/cart/totals-processor/default',
], function (wrapper, quote, customer, totalsProcessor) {
    'use strict';

    return function (setPaymentInformationExtended) {
        return wrapper.wrap(setPaymentInformationExtended, function (parentFunction, messageContainer, paymentData, skipBilling) {
            var previousEmail = quote.guestEmail;
            if (!customer.isLoggedIn() && !previousEmail) {
                quote.guestEmail = 'test@example.com';
            }
            var result = parentFunction(messageContainer, paymentData, skipBilling);
            result.done(function () {
                totalsProcessor.estimateTotals(quote.shippingAddress());
            });
            quote.guestEmail = previousEmail;
        });
    };
});
