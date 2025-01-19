document.addEventListener('DOMContentLoaded', () => {
  const loadElements = document.querySelectorAll('load');

  loadElements.forEach(async loadElement => {
    const src = loadElement.getAttribute('src');
    if (src) {
      try {
        const response = await fetch(src);
        if (response.ok) {
          const html = await response.text();
          const wrapper = document.createElement('div');
          wrapper.innerHTML = html;
          loadElement.replaceWith(wrapper);
        } else {
          console.error(`Failed to load ${src}: ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error loading ${src}:`, error);
      }
    } else {
      console.warn('<load> tag is missing "src" attribute.');
    }
  });
});
