export function render(root: HTMLElement, component: HTMLElement) {
    root.innerHTML = '';
    root.appendChild(component);
}

export function createCard(title: string, content: string) {
    const card = document.createElement('div');
    card.className = 'card glass';
    card.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    return card;
}
