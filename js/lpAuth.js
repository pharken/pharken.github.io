'use strict';


/**
 *    Authentication
 */
const identityFn = function(callback) {

    callback({
        iss: 'https://www.placeholder.com',
        acr: 'loa1',
        sub: 'weebly-website'
    });
};

lpTag.identities = [];
lpTag.identities.push(identityFn);


function authenticate(callback) {
    console.log('authenticate() has been called');
    // this JWT expires Dec 1, 2023
    callback('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3ZWVibHktd2Vic2l0ZSIsImFjciI6ImxvYTEiLCJpc3MiOiJodHRwczovL3d3dy5wbGFjZWhvbGRlci5jb20iLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTcwMTQ3NDUzOH0.XAS5jQT1YEZl3Y76V6ZELUcmMlytUS2W57OCwXeTJIPeye1N_JEla388fozsykkVUsLRG30R8dMiYyhkT7ApYfoV3aoCdg3q5PQtQQ4dST08Ppb9Vk5AdnNd7HgSgZSxHx6SKh5QDwzsYYgdeA6o2_yLFBIwTuKhsmKlOM4DI0tGzFLzgaB6aLaPsfGRJxutf4TJbWbcDL7K2_CEUKCpehUu6IjHMQvr-KabwWMU7myJ3S3WGv3jU60vCzeIo3YmTicWaLvLYAxJjw565aV-qBXKbRZSq_Hyv61r3pY5RBFJAuoEQQDEigDIqkbfC1uWEcxYk1gTmMdwJVTfP-fT4A');
}


/**
 *  Set cart to SDEs
 *
 *  type is mandatory
 */
const setCartToSde = function () {

    let pageTitle = document.title;
    let cartTotalTxt = document.getElementById('cartTotal').innerText;
    let cartTotal = parseInt(cartTotalTxt);
    console.log(`Title, Total: ${pageTitle}, ${cartTotal}`);

    lpTag.sdes = lpTag.sdes||[];
    lpTag.sdes.push(
        {
            "type": "prodView",
            "currency": "USD",
            "products": [{
                "product": {
                    "name": "Cart Total",
                    "category": pageTitle,
                    "sku": "",
                    "price": cartTotal
                }
            }]
        }
    );
};


/**
 *   Initialize Agent Widget SDK
 */
const initAgentSdk = function () {
    console.log('init Agent SDK');
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



/**
 *   Doc ready
 */
jQuery(function($) {

    $(document).ready(function() {
        initAgentSdk();
        setCartToSde();
    });
});


