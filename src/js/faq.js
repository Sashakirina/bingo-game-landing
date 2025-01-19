document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-list li');

  faqItems.forEach(item => {
    const toggleButton = item.querySelector('.faq-toggle');

    toggleButton.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
});
