import * as com from "./demoCommon.js";


let pazeSDK = null;

// ────────────────────────────────────────────────
// Initialize Paze SDK on page load
// ────────────────────────────────────────────────

const initPazeSDK = async (merchantName) => {
    try {
        pazeSDK = window.DIGITAL_WALLET_SDK;
        if (!pazeSDK) throw new Error("SDK script loaded but DIGITAL_WALLET_SDK not found");

        com.log("Paze SDK detected – initializing...", "info");

        const initResponse = await pazeSDK.initialize({
            client: {
                id:    'dummy-client-id-1234567890',
                profileId:   'dummy-profile-abc123',
                name: merchantName || 'merchant'        // default to 'merchant'
            }
        });

        com.log("Paze SDK initialized successfully", "success");
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
 * <h5>PAZE.CHECKOUT PAYLOAD OBJECT FIELDS (AUTO-INITIATED):</h5>
 *
 * <h6>Identity and session</h6>
 * <li>emailAddress: "CUSTOMER_EMAIL@example.com",  Preferred: Required if lookup by email (email OR phone)</li>
 * <li>mobileNumber: "CUSTOMER_MOBILE_NUMBER",     Conditional: Required if lookup by phone (email OR phone)</li>
 * <li>sessionId: "YOUR_SESSION_ID",               Recommended: same value per session that is used to link the transaction in your system</li>
 *
 * <h6>Flow control (for modifying how the Paze Experience works)</h6>
 * <li>actionCode: "START_FLOW",       ptional: START_FLOW (default and option required for Auto Initiate)</li>
 * <li>intent: "EXPRESS_CHECKOUT",     Required: EXPRESS_CHECKOUT required for Express Pay Flow</li>
 * <li>confirmLaunch: true,            Recommended: Show consent screen before Paze launches (default = false)</li>
 *
 * <li>transactionValue: {
 *     </br>Required as it renders transaction values in Paze Experience
 *     </br>transactionCurrencyCode: "USD", // Conditional with transactionValue
 *     </br>transactionAmount: "149.99",    // Conditional with transactionValue
 * </br>}</li>
 *
 * <h6>Address and card controls</h6>
 * <li>shippingPreference: "ALL",   Optional: ALL (default) | NONE</li>
 *
 * -- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- ---- -- -- -- --
 *
 * <h5>PAZE.COMPLETE PAYLOAD OBJECT FIELDS (AUTO-INITIATED):</h5>
 *
 * <li>transactionType: "PURCHASE",      // Required: "PURCHASE" | "CARD_ON_FILE" (store/manage for later use) | "BOTH" (CARD_ON_FILE + PURCHASE)</li>
 * <li>sessionId: "YOUR_SESSION_ID",     // Recommended: same value per session</li>
 *
 * <li>transactionValue: {
 *     </br>Conditional: Required if transactionType is "PURCHASE" or "BOTH"
 *     </br>transactionCurrencyCode: "USD",  Required with transactionValue
 *     </br>transactionAmount: "149.99",     Required with transactionValue
 * </br>}</li>
 *
 * <h6>Output behavior</h6>
 * <li>(optional) transactionOptions: {
 *     </br>payloadTypeIndicator: "PAYMENT",  Optional: "ID"  | "PAYMENT" (returns JWE )
 *     </br>billingPreference: "ALL",    Optional: "ALL" | "NONE"
 * </br>}</li>
 *
 * <h6>Additional metadata (used for Paze Fraud Liability Shift Program)</h6>
 * <li>(optional) enhancedTransactionData: {
 *     </br>orderId: "ORDER-12345",
 *     </br>riskScore: 42,
 *     </br>channel: "ECOMMERCE"
 * </br>}</li>
 *
 *
 * @returns {Promise<void>}
 */
const execPazeWorkflow = async (contact, amount) => {

    com.log("Execute Paze workflow", "info");
    if (!pazeSDK) {
        com.log("Paze SDK not available – cannot proceed", "error");
        return;
    }

    let pazeCustomerIdentifier = verifyPazeCustomerIdentityType(contact);
    if (pazeCustomerIdentifier)
        com.log(`Using provided identity: ${JSON.stringify(pazeCustomerIdentifier)}`, "info");
    else
        pazeCustomerIdentifier = {emailAddress: ""}; //TODO  for auto-initiated checkout, email can be undefined, i think ( test this )

    com.log("Starting Paze payment flow...", "info");
    let completeResponse = null;
    try {
        const checkoutBasePayload = {
            sessionId:        "abc123",            // get actual from server
            actionCode:       'START_FLOW',       // auto-initiate
            intent:           'EXPRESS_CHECKOUT',
            confirmLaunch:    true,
            transactionValue: {
                transactionCurrencyCode: "USD",
                transactionAmount:       amount
            }
        }
        const checkoutPayload = {...checkoutBasePayload, ...pazeCustomerIdentifier};  // add email or mobile
        com.log(JSON.stringify(checkoutPayload, null, 2));

        const checkoutResponse = await pazeSDK.checkout(checkoutPayload);
        com.log("Paze checkout finished", "success");


        //TODO  decode the checkout response
        //  see -  https://developer.paze.com/design-sandbox/docs/sdk-auto-initiate-with-express-pay


        const completeBasePayload = {
            transactionType:  "PURCHASE",
            sessionId:        "abc123",
            transactionValue: {
                transactionCurrencyCode: "USD",
                transactionAmount:       amount
            }
        }
        completeResponse = await pazeSDK.complete(completeBasePayload);       // returns JWE
        com.log("Paze session completed", "success");


/*
        // Send payment to secure processor
        if (completeResponse.securePayload) {
            const short = completeResponse.securePayload.substring(0, 80) + "...";
            com.log(`Secure payload received (length: ${completeResponse.securePayload.length})`, "success");
            com.log(`Payload sample: ${short}`, "success");
        } else
            com.log("No secure payload received in complete response", "error");
*/


    } catch (err) {
        const msg = `${err.reason}: ${err.message || 'Unknown error'}`;
        com.log(`Paze flow error: ${msg}`, "error");
        console.error('Paze error:', err);
    }

    //TODO  send to back end for decoding and http request to payment provider
    return completeResponse
};


/**
 *
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



export {
    initPazeSDK,
    execPazeWorkflow
}

