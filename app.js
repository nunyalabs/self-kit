// main.js (merged into root) - bootstrap app and wire modules
import { registerServiceWorker, setupInstallPrompt } from './pwa.js';
import { setupDynamicQuestionnaire } from './questionnaire_app.js';

// Theme handling
const THEME_KEY = 'toolkit.theme';
const MODE_KEY = 'toolkit.mode';
const THEMES = {
  'warm':        { start: '#f89b1b', end: '#d72c18', accent: '#e94435' },
  'medium-sky':  { start: '#0f82dc', end: '#026ac6', accent: '#0f82dc' },
  'deep-blue':   { start: '#026ac6', end: '#014b91', accent: '#026ac6' },
  'cyan':        { start: '#00dfd0', end: '#00bfb2', accent: '#00dfd0' },
  'leaf-green':  { start: '#73a538', end: '#004600', accent: '#73a538' }
};

function applyTheme(themeName) {
  const theme = THEMES[themeName] || THEMES['warm'];
  document.documentElement.style.setProperty('--bg-start', theme.start);
  document.documentElement.style.setProperty('--bg-end', theme.end);
  document.documentElement.style.setProperty('--accent-color', theme.accent || theme.start);
  localStorage.setItem(THEME_KEY, themeName);
  // Update meta theme-color for mobile status bar
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) { meta = document.createElement('meta'); meta.name = 'theme-color'; document.head.appendChild(meta); }
  meta.setAttribute('content', theme.start);
}

function applyMode(mode) {
  const m = (mode === 'light' || mode === 'dark') ? mode : 'dark';
  document.body.setAttribute('data-mode', m);
  localStorage.setItem(MODE_KEY, m);
}

function setupThemeMenu() {
  // Theme items
  const themeItems = document.querySelectorAll('.dropdown-menu [data-theme]');
  themeItems.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    const chosen = item.getAttribute('data-theme');
    applyTheme(chosen);
  }));
  // Mode items
  const modeItems = document.querySelectorAll('.dropdown-menu [data-mode]');
  modeItems.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    const mode = item.getAttribute('data-mode');
    applyMode(mode);
  }));
  // Load persisted selections (defaults: warm + dark)
  const savedTheme = localStorage.getItem(THEME_KEY) || 'warm';
  const savedMode = localStorage.getItem(MODE_KEY) || 'dark';
  applyTheme(savedTheme);
  applyMode(savedMode);
}

document.addEventListener('DOMContentLoaded', () => {
  setupThemeMenu();
  registerServiceWorker();
  setupInstallPrompt();
  setupDynamicQuestionnaire();
});

console.log('Hypertension Research Toolkit initialized (modular, root app.js)');
