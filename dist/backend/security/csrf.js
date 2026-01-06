export function generateCSRF() {
    return crypto.getRandomValues(new Uint8Array(32)).join('');
}
export function verifyCSRF(token, sessionToken) {
    return token === sessionToken;
}
