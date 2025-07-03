export function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorEl = document.getElementById('loginError');
  if (email === 'admberti@forja.com' && password === '%Wesley99132395') {
    window.location.href = "painel.html";
  } else {
    errorEl.textContent = 'Credenciais inválidas.';
  }
}
window.login = login;
