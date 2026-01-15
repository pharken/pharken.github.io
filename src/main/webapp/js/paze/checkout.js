/**
 *
 * TEMPLATE FOR A TEST PAGE
 *
 *  ✅✅✅
 *  ❌❌❌
 */

'use strict';



import * as com from "./demoCommon.js";
import {initPazeSDK, execPazeWorkflow} from "./paze.js";



/**
 * Initialize Paze SDK on page load
 */
window.addEventListener('load', async () => {
    com.log("Page loaded.  Init Paze SDK", "info");
    await initPazeSDK();
});


/* -- -- -- -- -- -- -- -- --
   Payment method selection
   -- -- -- -- -- -- -- -- --  */
export function selectPayment(method) {
    document.querySelectorAll('.payment-details').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('selected'));

    const detailsId = method + '-details';
    document.getElementById(detailsId).classList.add('active');
    document.getElementById(method).checked = true;
    document.querySelector(`div[onclick="selectPayment('${method}')"]`).classList.add('selected');

    com.log(`Switched to payment method: ${method}`, "info");
}


/* -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
   "Use this payment type" confirmation button triggered
   -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
document.getElementById('confirmPaymentBtn').addEventListener('click', async () => {
    const selected = document.querySelector('input[name="payment"]:checked');
    if (!selected) {
        com.log("No payment method selected", "error");
        return;
    }

    const method = selected.id;
    com.log(`Confirming payment method: ${method}`, "info");

    if (method !== 'paze') {
        com.log(`Payment type "${method}" confirmed (demo mode)`, "success");
        return;
    }
    else {
        const emailInput = document.getElementById('pazeEmail');
        const email = emailInput.value.trim();
        com.log("Validate email address", "info");

        if (!com.isValidEmail( email )) {
            com.log("Invalid email address format", "error");
            emailInput.focus();
            emailInput.style.borderColor = '#f87171';
            setTimeout(() => { emailInput.style.borderColor = '#4b5563'; }, 3000);
            return;
        }

        await execPazeWorkflow( email );
    }

});





