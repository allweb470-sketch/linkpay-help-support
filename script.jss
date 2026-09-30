const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('showLogin');

showRegisterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
});

showLoginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});
