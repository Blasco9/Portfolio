const nav = document.querySelector('.navbar-wrapper');
const intro = document.querySelector('.intro')

window.onscroll = function() {
  if(window.scrollY > (intro.scrollHeight - nav.offsetHeight)) {
    nav.style.backgroundColor = 'rgba(34, 47, 62, 0.9)';
  } else {
    nav.style.backgroundColor = 'transparent';
  }
}