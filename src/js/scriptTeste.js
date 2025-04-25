function toggleDarkMode() {
    const body = document.body;
    const themeButton = document.querySelector('.dark-mode-toggle');
    
    body.classList.toggle('dark-mode');
    
    // Change the icon based on the current theme
    if (body.classList.contains('dark-mode')) {
        themeButton.innerHTML = '<img src="src/images/light_mode.svg" alt="Modo Claro">';
    } else {
        themeButton.innerHTML = '<img src="src/images/dark_mode.svg" alt="Modo Escuro">';
    }
    
    // Save the preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for saved dark mode preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const themeButton = document.querySelector('.dark-mode-toggle');
    
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        themeButton.innerHTML = '<img src="src/images/light_mode.svg" alt="Modo Claro">';
    } else {
        themeButton.innerHTML = '<img src="src/images/dark_mode.svg" alt="Modo Escuro">';
    }
});