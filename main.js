// main.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully');
 
    // Basic functionality can be added here
});

// Theme Toggle Functionality
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference or use system preference
const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply initial theme
if (storedTheme) {
    root.setAttribute('data-theme', storedTheme);
} else {
    root.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}); 