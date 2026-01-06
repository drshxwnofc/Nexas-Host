import { Navbar } from '../components/navbar.ts';
import { render, createCard } from '../utils/dom.ts';
import { animateCards } from '../../public/assets/js/animations.js';
export async function DashboardPage() {
    const root = document.getElementById('root');
    if (!root)
        return;
    const nav = Navbar();
    render(root, nav);
    const main = document.createElement('div');
    main.className = 'dashboard';
    main.appendChild(createCard('My Apps', 'Manage your deployed apps'));
    main.appendChild(createCard('Coin Balance', 'View your Nexus Coins'));
    root.appendChild(main);
    animateCards();
}
