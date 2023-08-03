export default function themeToggle() {
  const toggleSwitch = document.querySelector('#toggle');
  const rootElement = document.documentElement;

  toggleSwitch.addEventListener('change', handleToggleChange);

  function handleToggleChange() {
    if (rootElement.getAttribute('data-theme') === 'dark') {
      rootElement.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    } else {
      rootElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    rootElement.setAttribute('data-theme', 'dark');
    toggleSwitch.checked = true;
  }
}

themeToggle();
