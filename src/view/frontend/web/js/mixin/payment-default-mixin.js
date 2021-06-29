/**
 * Copyright © 2018 Rubic. All rights reserved.
 * See LICENSE.txt for license details.
 */
define([
    'jquery',
], function ($) {
    'use strict';

    return function (target) {
        return target.extend({
            selectPaymentMethod: function () {
                this._super();
                var $ppp = jQuery('#ppplus');
                $ppp.parent().height($ppp.height()-30);
                $ppp.parent().addClass('ppplus-container').parent().addClass('ppplus-method');
                setTimeout(function () {
                    //recalculate height
                    $ppp.parent().height($ppp.height()-30);
                }, 100);
            }
        });
    };
});
