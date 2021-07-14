
define([
    'jquery',
    'Rubic_CleanCheckoutOnestep/js/model/address-validator'
], function(
    $,
    addressValidator
) {
    'use strict';

    return function (target) {
        return target.extend({
            /**
             * @inheritDoc
             */
            setShippingInformation: function () {
                if (
                    this.validateShippingInformation()
                    &&
                    addressValidator.validateBillingInformation(this.isFormInline, this.source)
                ) {
                    return this._super();
                }
            },
            validateGuestEmail: function () {
                var loginFormSelector = 'form[data-role=email-with-possible-login]';
                var $input = $(loginFormSelector).find('input[name="username"]');
                if (!$input.val()) {
                    $input.val(this.getAmazonCustomerEmail());
                }

                return this._super();
            },
            getAmazonCustomerEmail: function () {
                if (window.checkoutConfig.hasOwnProperty('amazonLogin') &&
                    typeof window.checkoutConfig.amazonLogin.amazon_customer_email === 'string'
                ) {
                    return window.checkoutConfig.amazonLogin.amazon_customer_email;
                }

                return '';
            }
        });
    }
});
