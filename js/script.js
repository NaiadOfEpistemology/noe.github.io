document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
document.querySelector('.next').addEventListener('click', () => {
items[currentIndex].classList.remove('active');
currentIndex = (currentIndex + 1) % totalItems;
items[currentIndex].classList.add('active');
});
document.querySelector('.prev').addEventListener('click', () => {
items[currentIndex].classList.remove('active');
currentIndex = (currentIndex - 1 + totalItems) % totalItems;
items[currentIndex].classList.add('active');
});
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
  } else {
      localStorage.setItem('darkMode', 'disabled');
  }
});
