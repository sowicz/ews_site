let isOpen = false;

function toggleMenu() {
  isOpen = !isOpen;
  const menu = document.getElementById('mobile-menu') as HTMLDivElement;
  const iconOpen = document.getElementById('icon-open') as HTMLDivElement;
  const iconClose = document.getElementById('icon-close') as HTMLDivElement;
  
  if (isOpen) {
    menu.style.display = 'block';
    iconOpen.style.display = 'none';
    iconClose.style.display = 'block';
  } else {
    menu.style.display = 'none';
    iconOpen.style.display = 'block';
    iconClose.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button') as HTMLButtonElement;
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }
});