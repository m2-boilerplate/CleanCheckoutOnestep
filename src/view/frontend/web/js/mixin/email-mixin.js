
define([
    'Magento_Customer/js/model/customer',
    'Magento_Checkout/js/model/quote',
    'ko',
], function (customer, quote, ko) {
    'use strict';

    return function (target) {
        return target.extend({
            initialize: function () {
                this._super();
                if (window.checkoutConfig.hasOwnProperty('amazonLogin') &&
                    typeof window.checkoutConfig.amazonLogin.amazon_customer_email === 'string'
                ) {
                    quote.guestEmail = window.checkoutConfig.amazonLogin.amazon_customer_email;
                }
            }
        });
    };
});
