import * as com from "./demoCommon.js";
import {decodeJWS} from "./decoder.js";


let pazeSDK = null;

/**
 * Initialize Paze SDK on page load
 *
 * @param merchantName
 * @returns {Promise<void>}
 */
const initPazeSDK = async () => {
    try {
        pazeSDK = window.DIGITAL_WALLET_SDK;
        if (!pazeSDK) throw new Error("SDK script loaded but DIGITAL_WALLET_SDK not found");

        com.log("Paze SDK detected – initializing...", "info");

        // init with merchant data
        const initResponse = await pazeSDK.initialize({
            client: {
                id:         'SSNYS4XS8O0XZEMQCJ8C13Wd4C94tnSvilwN7jns_IyC7zzmw',
                profileId:  '460b4f47-f685-4b0c-b250-c897b8ad8cb4',
                name:       'MIT'
            }
        });

        com.log("Paze SDK initialized successfully", "info");
        com.log("Init response: " + JSON.stringify(initResponse, null, 2), "success");
    }
    catch (err) {
        const msg = err.message || 'Unknown initialization error';
        com.log("Paze initialization failed: " + msg, "error");
        console.error('Paze init failed:', err);
    }
}

/**
 * <h1>Execute Paze workflow</h1>
 *
 * -- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- --
 *
 * <h5>CHECKOUT - PAYLOAD</h5>
 *
 * <li>emailAddress: "CUSTOMER_EMAIL@example.com",/li>
 * <li>mobileNumber: "CUSTOMER_MOBILE_NUMBER",</li>
 * <li>sessionId: "YOUR_SESSION_ID",/li>
 * <li>actionCode: "START_FLOW",</li>
 * <li>intent: "EXPRESS_CHECKOUT",/li>
 * <li>confirmLaunch: true,</li>
 * <li>transactionValue: { transactionCurrencyCode: "USD", transactionAmount: "149.99" }</li>
 * <li>shippingPreference: "ALL"</li>
 *
 * -- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- --
 *
 * <h5>COMPLETE - PAYLOAD</h5>
 *
 * <li>transactionType: "PURCHASE",</li>
 * <li>sessionId: "YOUR_SESSION_ID",</li>
 * <li>transactionValue: { transactionCurrencyCode: "USD", transactionAmount: "149.99" }</li>
 * <li>transactionOptions: { payloadTypeIndicator: "PAYMENT", billingPreference: "ALL" }</li>
 * </br><h6>Additional metadata (Optional: for Paze Fraud Liability Shift Program)</h6>
 *
 * @returns {Promise<void>}
 */
const execPazeWorkflow = async (contact, amount) => {
    com.log("Execute Paze workflow", "info");

    let pazeCustomerIdentifier = verifyPazeCustomerIdentityType(contact);
    if (!pazeCustomerIdentifier)
        pazeCustomerIdentifier = {emailAddress: ""};


    let completeResponse = false;
    try {
        const checkoutBasePayload = {
            sessionId:        "abc123",             // get actual from server
            actionCode:       'START_FLOW',
            intent:           'EXPRESS_CHECKOUT',
            confirmLaunch:    true,
            transactionValue: {
                transactionCurrencyCode: "USD",
                transactionAmount:       amount
            }
        }
        const checkoutPayload = {...checkoutBasePayload, ...pazeCustomerIdentifier};  // add email or mobile
        com.log(JSON.stringify(checkoutPayload, null, 2));

        const checkoutObj = await pazeSDK.checkout(checkoutPayload);   // returns JWS
        com.log("Paze checkout request finished", "success");

        let jws = null
        if (checkoutObj?.result === "COMPLETE") {
            com.log(`Checkout response raw JWS: ${checkoutObj.checkoutResponse}`, "warning");
            parsePazeResponse(checkoutObj.checkoutResponse);
        }
        else {
            com.log("Paze checkout did not complete", "warning");
            return;
        }

        const completeBasePayload = {
            transactionType:  "PURCHASE",
            sessionId:        "abc123",
            transactionValue: {
                transactionCurrencyCode: "USD",
                transactionAmount:       amount
            },
            transactionOptions: {
                payloadTypeIndicator: "PAYMENT",
                billingPreference: "ALL"
            }
        }
        const completeObj = await pazeSDK.complete(completeBasePayload);    // returns JWS
        com.log("Paze complete request finished", "info");
        parsePazeResponse( completeObj.completeResponse );
        com.log("Paze session completed", "success");
        completeResponse = true;
    }
    catch (err) {
        const msg = `${err.reason}: ${err.message || 'Unknown error'}`;
        com.log(`Paze flow error: ${msg}`, "error");
        console.error('Paze error:', err);
    }

    return completeResponse
};


/**
 * Validate Paze identity  (email or mobile)
 */
const verifyPazeCustomerIdentityType = (contact) => {
    com.log("Validating email or phone number", "info");

    const identityType = com.getCustomerIdentityType( contact );
    if (!identityType) {
        com.log("Invalid email or phone number format", "error");
        contactInput.classList.add('invalid');
        contactInput.focus();
        setTimeout(() => contactInput.classList.remove('invalid'), 4000);
        return null;
    }
    com.log(`Using provided contact: ${JSON.stringify(identityType)}`, "info");

    return identityType
}


const parsePazeResponse = (encryptedJWS) => {
    if (encryptedJWS) {
        const jws = decodeJWS(encryptedJWS);
        if (jws) {
            com.log(`header:  ${JSON.stringify(jws.header)}`, "info");
            com.log(`payload: ${JSON.stringify(jws.payload)}`, "info");
        }
    }
}



export {
    initPazeSDK,
    execPazeWorkflow
}

