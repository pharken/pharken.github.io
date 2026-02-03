// browser + Node.js ≥ 16
const decodeJWS = (token) => {
    if (typeof token !== 'string')
        throw new Error('Token must be a string');


    // Remove leading/trailing whitespace + common line endings
    token = token.trim().replace(/[\r\n]+$/g, '');

    const parts = token.split('.');
    if (parts.length !== 3) {
        console.log("Actual parts:", parts);
        console.log("Token after trim:", JSON.stringify(token));
        throw new Error(`Invalid JWS compact format – got ${parts.length} parts instead of 3`);
    }

    const [headerB64, payloadB64, signatureB64] = parts;

    const toBase64 = (b64url) =>
        b64url.replace(/-/g, '+').replace(/_/g, '/') +
        '==='.slice((b64url.length + 3) % 4);

    const decodePart = (b64) => {
        const base64 = toBase64(b64);
        const binary = atob(base64);
        // Convert binary string → unicode string → JSON
        return JSON.parse(
            decodeURIComponent(
                [...binary].map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join('')
            )
        );
    };

    const header  = decodePart(headerB64);
    const payload = decodePart(payloadB64);

    return {
        header: header,
        payload: payload
    };

}

export { decodeJWS }