// main.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully');
 
    // Basic functionality can be added here
});

// Theme System Configuration
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const paletteToggle = document.getElementById('palette-toggle');
const palettes = ["theme-01", "theme-02", "theme-03"];

// Initial Theme Load
const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'theme-01');
root.setAttribute('data-theme', initialTheme);

// Theme Toggle (Light/Dark)
themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'theme-01' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Palette Toggle (Light Mode Only)
paletteToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "dark") {
        paletteToggle.setAttribute("aria-disabled", "true");
        return;
    }

    const index = palettes.indexOf(currentTheme);
    const next = palettes[(index + 1) % palettes.length];
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    paletteToggle.setAttribute("aria-disabled", "false");
}); 