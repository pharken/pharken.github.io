'use strict';


let cartTotal = 2500;
let pageTitle = document.title;


/**
 Set SDE with cart value
 */
const setCartToSde = function () {

    let pageTitle = document.title;
    let cartTotalTxt = document.getElementById('cartTotal').innerText;
    let cart = parseInt(cartTotalTxt);
    console.log(`Title, Total: ${pageTitle}, ${cartTotal}`);

    lpTag.sdes = lpTag.sdes||[];
    lpTag.sdes.push(
        {
            "type": "cart",
            "total": cart,
            "currency": "USD",
        }
    );

    lpTag.section = [
        pageTitle
    ];
};



const initAgentSdk = function () {
    console.log('init Agent SDK with callback functions');
    lpTag.agentSDK.init({
        notificationCallback: notificationHandler,
        visitorFocusedCallback: focusHandler,
        visitorBlurredCallback: blurHandler
    })
};
const notificationHandler = function () {
    console.log('notification handler callback');
};
const focusHandler = function () {
    console.log('focus handler callback');
};
const blurHandler = function () {
    console.log('blur handler callback');
};


jQuery(function($) {

    $(document).ready(function() {
        initAgentSdk();
    });
});
