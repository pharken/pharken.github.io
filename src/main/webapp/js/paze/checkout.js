'use strict';

import * as com from "./demoCommon.js";
import { initPazeSDK, execPazeWorkflow } from "./paze.js";

let placeOrderBtn;


// Page init
window.addEventListener('load', async () => {
    com.log("Page loaded. Initializing Paze SDK...", "info");
    const merchantName = 'Acme'
    await initPazeSDK(merchantName);

    placeOrderBtn = document.getElementById('placeOrderBtn');
});

/**
 * Auto copy the email or phone number to the Paze contact input field
 */
const customerEmail = document.getElementById('customerEmail');
const customerPhone = document.getElementById('customerPhone');
const pazeContact  = document.getElementById('pazeContact');

if (customerEmail && pazeContact) {
    customerEmail.addEventListener('input', () => {
        pazeContact.value = customerEmail.value.trim();
    });
}

// Auto-copy for customer phone → pazeContact (only if email is empty)
if (customerPhone && pazeContact) {
    customerPhone.addEventListener('input', () => {
        if (!customerEmail?.value.trim()) {
            pazeContact.value = customerPhone.value.trim();
        }
    });
}

/**
 * Highlight Paze contact field when it's updated
 */
function highlightField(field) {
    if (!field) return;
    field.classList.add('highlight-auto');
    setTimeout(() => field.classList.remove('highlight-auto'), 1500);
}

// In email input listener:
customerEmail.addEventListener('input', () => {
    pazeContact.value = customerEmail.value.trim();
    highlightField(pazeContact);
});

// In phone input listener:
customerPhone.addEventListener('input', () => {
    if (!customerEmail?.value.trim()) {
        pazeContact.value = customerPhone.value.trim();
        highlightField(pazeContact);
    }
});


/**
 * Payment type radio button selected
 * @param method
 */
const selectPayment = (method) =>{
    document.querySelectorAll('.payment-details').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('selected'));

    const detailsId = method + '-details';
    document.getElementById(detailsId).classList.add('active');
    document.getElementById(method).checked = true;

    // Find and highlight the clicked div (works even without onclick now)
    const option = document.querySelector(`#${method}`).closest('.payment-option');
    if (option) option.classList.add('selected');

    com.log(`Switched to payment method: ${method}`, "info");
    updatePlaceOrderButtonText(method);

    // Reset email invalid style
    document.getElementById('pazeEmail')?.classList.remove('invalid');
}


// Place order confirmation
document.getElementById('placeOrderBtn')?.addEventListener('click', async () => {
    const selected = document.querySelector('input[name="payment"]:checked');
    if (!selected) {
        com.log("No payment method selected", "error");
        return;
    }

    placeOrderBtn.disabled = true;
    const originalButtonText = placeOrderBtn.textContent;
    placeOrderBtn.textContent = "Processing...";

    const paymentMethod = selected.id;
    com.log(`Confirming payment method: ${paymentMethod}`, "info");

    try {
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
    }
    catch (err) {
        com.log(`Order placement failed: ${err.message || 'Unknown error'}`, "error");
        console.error(err);
    }
    finally {
        placeOrderBtn.disabled = false;
        placeOrderBtn.textContent = originalButtonText;
    }
});


function updatePlaceOrderButtonText(method) {
    if (!placeOrderBtn) return;

    switch (method) {
        case 'credit':
            placeOrderBtn.textContent = 'Place credit card order';
            break;
        case 'paze':
            placeOrderBtn.textContent = 'Place Paze order';
            break;
        case 'points':
            placeOrderBtn.textContent = 'Place order with Points';
            break;
        default:
            placeOrderBtn.textContent = 'Place your order';
    }
}

export { selectPayment }