function initGallery() {
  const galleryContainer = document.querySelector('.gallery-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const images = [
    './img/gallery/gallery-1.png',
    './img/gallery/gallery-2.png',
    './img/gallery/gallery-3.png',
    './img/gallery/gallery-4.png',
  ];
  let currentImageIndex = 0;

  if (!galleryContainer || !prevBtn || !nextBtn) {
    console.error('Gallery elements not found in the DOM');
    return;
  }

  const galleryImage = galleryContainer.querySelector('.gallery-image');
  galleryImage.src = images[currentImageIndex];
  console.log(`Attempting to load image: ${images[currentImageIndex]}`);

  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentImageIndex];
    console.log(
      `Prev button clicked, current image: ${images[currentImageIndex]}`
    );
    console.log(`Attempting to load image: ${images[currentImageIndex]}`);
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    galleryImage.src = images[currentImageIndex];
    console.log(
      `Next button clicked, current image: ${images[currentImageIndex]}`
    );
    console.log(`Attempting to load image: ${images[currentImageIndex]}`);
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
          console.log(`Loaded content from ${src}`);
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
    console.log('All <load> tags processed');
    initGallery();
  });
});
