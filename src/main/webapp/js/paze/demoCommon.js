/**
 *
 * @param value
 * @returns {null|object}
 */
const getCustomerIdentityType = (value) => {

    let identity = null;
    if (!value || value.trim() === '') return { 'emailAddress': '' };

    const identityVal = value.trim();

    // Email check
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(identityVal))
        identity = { 'emailAddress': identityVal };

    // Phone number check (very permissive – international format, digits, +, -, spaces, parentheses)
    const phoneRegex = /^(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?:\s*(?:ext|x|ext.)\s*(\d+))?$/i;
    if (phoneRegex.test(identityVal))
        identity = { 'mobileNumber': identityVal };

    return identity;
}


const log = (message, type = 'info') =>{
    const content = document.getElementById('status-window-content');
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const line = document.createElement('div');
    line.className = 'status-line';
    line.innerHTML = `
      <span class="status-timestamp">[${timeStr}]</span>
      <span class="status-type-${type}">${message}</span>
    `;
    content.appendChild(line);
    content.scrollTop = content.scrollHeight;
}


export { getCustomerIdentityType, log }
