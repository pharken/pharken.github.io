import * as com from "./demoCommon.js";


let pazeSDK = null;

// ────────────────────────────────────────────────
// Initialize Paze SDK on page load
// ────────────────────────────────────────────────

const initPazeSDK = async () => {
    try {
        pazeSDK = window.DIGITAL_WALLET_SDK;
        if (!pazeSDK) throw new Error("SDK script loaded but DIGITAL_WALLET_SDK not found");

        com.log("Paze SDK detected – initializing...", "info");

        const initResponse = await pazeSDK.initialize({
            client: {
                clientId:    'dummy-client-id-1234567890',
                displayName: 'Acme Demo',
                profileId:   'dummy-profile-abc123'
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
 * Execute Paze workflow
 *
 * @returns {Promise<void>}
 */
const execPazeWorkflow = async (email) => {

    com.log("Execute Paze workflow", "info");
    if (!pazeSDK) {
        com.log("Paze SDK not available – cannot proceed", "error");
        return;
    }

    if (email)
        com.log(`Using provided email: ${email}`, "info");
    else
        com.log("Proceeding without email (optional field)", "info");

    com.log("Starting Paze payment flow...", "info");
    try {
        const checkoutResponse = await pazeSDK.checkout({
            actionCode: 'PAYMENT',
            email: email || undefined,
            amount: { value: '53.49', currency: 'USD' },
            intent: 'PAYMENT'
        });

        com.log("Paze checkout completed by user", "success");

        const completeResponse = await pazeSDK.complete({});

        com.log("Paze session completed", "success");

        if (completeResponse.securePayload) {
            const short = completeResponse.securePayload.substring(0, 80) + "...";
            com.log(`Secure payload received (length: ${completeResponse.securePayload.length})`, "success");
            com.log(`Payload sample: ${short}`, "success");
        } else {
            com.log("No secure payload received in complete response", "error");
        }

    } catch (err) {
        const msg = err.message || 'Unknown error';
        com.log(`Paze flow error: ${msg}`, "error");
        console.error('Paze error:', err);
    }
}



export {
    initPazeSDK,
    execPazeWorkflow
}

