const navLinks = document.querySelectorAll('.nav-item');
const modalWrapper = document.querySelector('.modal-wrapper');
const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');
const modalLinks = document.querySelectorAll('.nav-link-mob');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

burgerBtn.addEventListener('click', () => {
  modalWrapper.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  modalWrapper.classList.remove('is-open');
});

modalWrapper.addEventListener('click', event => {
  if (event.target === modalWrapper) {
    modalWrapper.classList.remove('is-open');
  }
});

modalLinks.forEach(link => {
  link.addEventListener('click', () => {
    modalWrapper.classList.remove('is-open');
  });
});
