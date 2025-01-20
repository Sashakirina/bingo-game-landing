const initGallery = () => {
  const galleryContainer = document.querySelector('.gallery-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const images = [
    'img/gallery/gallery-1.png',
    'img/gallery/gallery-2.png',
    'img/gallery/gallery-3.png',
    'img/gallery/gallery-4.png',
  ];

  const links = document.querySelectorAll('.gallery-link');
  let currentImageIndex = 0;

  if (!galleryContainer || !prevBtn || !nextBtn || !links.length) {
    console.error('Gallery elements not found in the DOM');
    return;
  }

  // Показать текущее изображение, скрыть остальные
  const updateGallery = index => {
    links.forEach((link, i) => {
      if (i === index) {
        link.classList.remove('hidden'); // Показать текущее изображение
        galleryContainer.querySelector('.gallery-image').src = images[i]; // Обновить src
      } else {
        link.classList.add('hidden'); // Скрыть остальные
      }
    });
  };

  // Установить начальное состояние
  updateGallery(currentImageIndex);

  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGallery(currentImageIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery(currentImageIndex);
  });

  // Initialize baguetteBox for lightbox functionality
  baguetteBox.run('.gallery-container');

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const closeButtons = document.querySelectorAll('.baguetteBox-close');
      closeButtons.forEach(button => button.click());
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
});
