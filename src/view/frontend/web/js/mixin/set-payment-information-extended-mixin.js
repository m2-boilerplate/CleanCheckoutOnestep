define([
    'mage/utils/wrapper',
    'Magento_Checkout/js/model/quote',
    'Magento_Customer/js/model/customer'
], function (wrapper, quote, customer) {
    'use strict';

    return function (setPaymentInformationExtended) {
        return wrapper.wrap(setPaymentInformationExtended, function (parentFunction, messageContainer, paymentData, skipBilling) {
            var previousEmail = quote.guestEmail;
            if (!customer.isLoggedIn() && !previousEmail) {
                quote.guestEmail = 'test@example.com';
            }
            parentFunction(messageContainer, paymentData, skipBilling);
            quote.guestEmail = previousEmail;
        });
    };
});
