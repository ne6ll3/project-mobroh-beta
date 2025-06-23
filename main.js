const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('active');
  menuBtn.classList.remove('open');
});
