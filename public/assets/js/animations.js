// GPU accelerated liquid effect for dashboard cards
export function animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05) translateY(-5px)';
            card.style.transition = '0.3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Animated page loader
export function showLoader() {
    const root = document.getElementById('root');
    const loader = document.createElement('div');
    loader.className = 'loader liquid';
    loader.innerText = 'Loading Nexus...';
    root.appendChild(loader);
                                          }
