const burgerBtn = document.getElementById('js-burger');
const headerNavigation = document.getElementById('js-header-navigation');

burgerBtn.addEventListener('click', () => {
  console.log(headerNavigation)
  burgerBtn.classList.toggle('burger--active')
  headerNavigation.classList.toggle('open')
})


