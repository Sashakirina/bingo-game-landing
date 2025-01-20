function initGallery() {
  const galleryContainer = document.querySelector('.gallery-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const slides = galleryContainer.querySelectorAll('.gallery-slide');
  const images = Array.from(slides).map(slide => slide.src);
  let currentImageIndex = 0;

  if (!galleryContainer || !prevBtn || !nextBtn || !slides.length) {
    console.error('Gallery elements not found in the DOM');
    return;
  }

  const galleryImage = galleryContainer.querySelector('.gallery-image');
  galleryImage.src = images[currentImageIndex];

  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentImageIndex];
    updateSlides(currentImageIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    galleryImage.src = images[currentImageIndex];
    updateSlides(currentImageIndex);
  });

  const updateSlides = index => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('hidden', i !== index);
    });
  };

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
