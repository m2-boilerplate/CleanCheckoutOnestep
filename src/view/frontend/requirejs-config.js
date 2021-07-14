/**
 * Copyright © 2018 Rubic. All rights reserved.
 * See LICENSE.txt for license details.
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-payment-information-extended': {
                'Rubic_CleanCheckoutOnestep/js/mixin/set-payment-information-extended-mixin': true
            },
            'Magento_Checkout/js/view/payment/default': {
                'Rubic_CleanCheckoutOnestep/js/mixin/payment-default-mixin': true
            },
            'Amazon_Payment/js/view/shipping': {
                'Rubic_CleanCheckoutOnestep/js/mixin/shipping-amazon-mixin': true
            },

            'Magento_CheckoutAgreements/js/model/agreements-assigner': {
                'Rubic_CleanCheckoutOnestep/js/mixin/agreements-assigner-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Rubic_CleanCheckoutOnestep/js/mixin/shipping-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Rubic_CleanCheckoutOnestep/js/mixin/payment-mixin': true
            },
            'Rubic_CleanCheckoutTheme/js/view/email': {
                'Rubic_CleanCheckoutOnestep/js/mixin/email-mixin': true
            }
        }
    }
};
