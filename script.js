// Theme switcher JS
const themeBtn = document.getElementById('themeBtn');
const root = document.documentElement;
let dark = false;
themeBtn.onclick = function() {
  dark = !dark;
  if (dark) {
    root.setAttribute('data-theme', 'dark');
    themeBtn.textContent = "🌞 Light Mode";
  } else {
    root.removeAttribute('data-theme');
    themeBtn.textContent = "🌙 Dark Mode";
  }
}
// Fade-in animation on scroll for project cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});
document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(40px)';
  observer.observe(card);
});
