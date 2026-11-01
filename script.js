const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const themeToggle = document.querySelector('#themeToggle');
const contactForm = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☾' : '☼';
  document.querySelector('meta[name="theme-color"]').content = isLight ? '#f7f9fc' : '#101827';
});

document.querySelector('#year').textContent = new Date().getFullYear();

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  formMessage.classList.remove('error');

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2) {
    showMessage('Please enter a name with at least 2 characters.', true);
    return;
  }
  if (!emailPattern.test(email)) {
    showMessage('Please enter a valid email address.', true);
    return;
  }
  if (message.length < 10) {
    showMessage('Your message should be at least 10 characters.', true);
    return;
  }

  showMessage('Looks good! This demo validates your message, but does not send it. Connect a backend to receive submissions.', false);
  contactForm.reset();
});

function showMessage(message, isError) {
  formMessage.textContent = message;
  formMessage.classList.toggle('error', isError);
}
