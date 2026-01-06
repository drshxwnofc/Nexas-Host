export function render(root, component) {
    root.innerHTML = '';
    root.appendChild(component);
}
export function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card glass';
    card.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    return card;
}
