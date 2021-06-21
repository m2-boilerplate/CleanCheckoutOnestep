
define([
    'Rubic_CleanCheckoutOnestep/js/model/address-validator'
], function(
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
            }
        });
    }
});
