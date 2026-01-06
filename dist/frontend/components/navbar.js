export function Navbar() {
    const nav = document.createElement('nav');
    nav.className = "glass navbar";
    nav.innerHTML = `
    <div class="logo">Nexus</div>
    <div class="menu">
      <a href="/dashboard">Dashboard</a>
      <a href="/apps">Apps</a>
      <a href="/forum">Forum</a>
      <a href="/profile">Profile</a>
    </div>
  `;
    return nav;
}
