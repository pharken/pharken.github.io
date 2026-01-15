// Simple email validation (basic regex + length check)
const isValidEmail = (email) => {
    if (!email) return true; // empty is allowed (optional field)

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 254;
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


export  {
    isValidEmail,
    log
}