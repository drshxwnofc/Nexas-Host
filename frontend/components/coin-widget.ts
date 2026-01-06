export function CoinWidget(coins: number) {
    const div = document.createElement('div');
    div.className = 'coin-widget glass';
    div.innerHTML = `
        <span>Nexus Coins: <strong>${coins}</strong></span>
        <button id="send-coin">Send</button>
    `;
    return div;
}
