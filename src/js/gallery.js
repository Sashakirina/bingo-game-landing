function initGallery() {
  const galleryContainer = document.querySelector('.gallery-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const images = [
    'img/gallery/gallery-1.png',
    'img/gallery/gallery-2.png',
    'img/gallery/gallery-3.png',
    'img/gallery/gallery-4.png',
  ];

  console.log('Images array:', images); // Log the images array

  const links = document.querySelectorAll('.gallery-link');
  let currentImageIndex = 0;

  if (!galleryContainer || !prevBtn || !nextBtn || !links.length) {
    console.error('Gallery elements not found in the DOM');
    return;
  }

  const updateGallery = index => {
    links.forEach((link, i) => {
      if (i === index) {
        link.classList.remove('hidden');
        galleryContainer.querySelector('.gallery-image').src = images[i];
      } else {
        link.classList.add('hidden');
      }
    });
  };

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
}

document.addEventListener('DOMContentLoaded', () => {
  const loadTags = document.querySelectorAll('load');
  const promises = Array.from(loadTags).map(async loadTag => {
    const src = loadTag.getAttribute('src');
    if (src) {
      try {
        const response = await fetch(src);
        if (response.ok) {
          const html = await response.text();
          const wrapper = document.createElement('div');
          wrapper.innerHTML = html;
          loadTag.replaceWith(wrapper);
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

  Promise.all(promises).then(() => {
    initGallery();
  });
});
