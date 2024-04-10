function toggleTheme() {
  const checkbox = document.getElementById('theme-checkbox');
  const body = document.body;
  
  if (checkbox.checked) {
   
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
}

// Verifica a preferência de tema armazenada no localStorage ao carregar a página
function applyStoredTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-checkbox').checked = true;
  }
}

// Aplica a preferência de tema armazenada ao carregar a página
window.onload = applyStoredTheme;
