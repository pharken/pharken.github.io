'use strict';

import * as com from "./demoCommon.js";
import { initPazeSDK, execPazeWorkflow } from "./paze.js";

let placeOrderBtn;
let isPazeIntiailize = null;

// Page init
window.addEventListener('load', async () => {
    com.log("Page loaded. Initializing Paze SDK...", "info");
    isPazeIntiailize = false
    try {
        await initPazeSDK();
        isPazeIntiailize = true;
    }
    catch (err) {
        com.log(`Paze initialize error:: ${err.message}`, "error");
    }

    placeOrderBtn = document.getElementById('placeOrderBtn');
});

/**
 * Auto copy the email or phone number to the Paze contact input field
 */
const customerEmail = document.getElementById('customerEmail');
const customerPhone = document.getElementById('customerPhone');
const pazeContact   = document.getElementById('pazeContact');

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


/**
 *  Place Paze order
 */
document.querySelectorAll('paze-button').forEach(pb => {
        pb.addEventListener("click", async () => {
            try {
                let amount = document.getElementById('totalAmount').textContent;
                amount = amount.replaceAll("$", "");
                const contactInput = document.getElementById('pazeContact');
                const contact = contactInput.value.trim();
                if ( await execPazeWorkflow(contact, amount) )
                    showModal();
            }
            catch (err) {
                com.log(`Error while clicking Paze button: ${err.message}`, "error");
            }
        })
    }
);



function updatePlaceOrderButtonText(method) {
    if (!placeOrderBtn) return;

    const pazeBtn = document.getElementById('pazeBtnWrapper');
    switch (method) {
        case 'credit':
            placeOrderBtn.textContent = 'Place credit card order';
            pazeBtn.classList.replace("show", "hidden");
            placeOrderBtn.classList.replace("hidden", "show");
            break;
        case 'paze':
            //TODO check isPazeInitialize
            placeOrderBtn.classList.replace("show", "hidden");
            pazeBtn.classList.replace("hidden", "show");
            break;
        case 'points':
            placeOrderBtn.textContent = 'Place order with Points';
            pazeBtn.classList.replace("show", "hidden");
            placeOrderBtn.classList.replace("hidden", "show");

            break;
        default:
            placeOrderBtn.textContent = 'Place your order';
            pazeBtn.classList.replace("show", "hidden");
            placeOrderBtn.classList.replace("hidden", "show");
    }
}


const modal = document.getElementById('transactionCompleteModal');
function showModal() {
    modal.style.display = 'flex';
}
// Click outside content to close
modal.addEventListener('click', function(e) {
    if (e.target === modal)
        modal.style.display = 'none';
});


export { selectPayment }