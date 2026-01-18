'use strict';

import * as com from "./demoCommon.js";
import { initPazeSDK, execPazeWorkflow } from "./paze.js";

let confirmBtn;

// Page init
window.addEventListener('load', async () => {
    com.log("Page loaded. Initializing Paze SDK...", "info");
    const merchantName = 'Acme'
    await initPazeSDK(merchantName);

    confirmBtn = document.getElementById('confirmPaymentBtn');
});


// Export for use in HTML onclick
export function selectPayment(method) {
    document.querySelectorAll('.payment-details').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('selected'));

    const detailsId = method + '-details';
    document.getElementById(detailsId).classList.add('active');
    document.getElementById(method).checked = true;

    // Find and highlight the clicked div (works even without onclick now)
    const option = document.querySelector(`#${method}`).closest('.payment-option');
    if (option) option.classList.add('selected');

    com.log(`Switched to payment method: ${method}`, "info");

    // Reset email invalid style
    document.getElementById('pazeEmail')?.classList.remove('invalid');
}


// Confirm button logic
document.getElementById('confirmPaymentBtn')?.addEventListener('click', async () => {
    const selected = document.querySelector('input[name="payment"]:checked');
    if (!selected) {
        com.log("No payment method selected", "error");
        return;
    }

    // Disable button during processing
    confirmBtn.disabled = true;
    confirmBtn.textContent = "Processing...";

    const paymentMethod = selected.id;
    com.log(`Confirming payment method: ${paymentMethod}`, "info");

    switch (paymentMethod) {
        case 'credit':
            break;
        case 'paze':
            let amount = document.getElementById('totalAmount').textContent;
            amount = amount.replaceAll("$", "");
            const contactInput = document.getElementById('pazeContact');
            const contact = contactInput.value.trim();
            await execPazeWorkflow(contact, amount);
            break;
        case 'points':
            break;
        default:
            com.log("No payment method selected", "error");
    }

    // Re-enable
    confirmBtn.disabled = false;
    confirmBtn.textContent = "Use this payment type";
});