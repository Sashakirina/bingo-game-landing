document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('lightgallery');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const images = gallery.getElementsByTagName('a');
  let currentImageIndex = 0;

  const showImage = index => {
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = i === index ? 'block' : 'none';
    }
  };

  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  });

  showImage(currentImageIndex);

  const lightGalleryInstance = lightGallery(gallery, {
    selector: 'a',
    speed: 500,
    download: false,
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      lightGalleryInstance.closeGallery();
    }
  });
});
