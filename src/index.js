const nav = document.querySelector('.navbar-wrapper');
const intro = document.querySelector('.intro');
const introName = document.querySelector('.intro-name');
const introDescription = document.querySelector('.intro-description');
const introLink = document.querySelector('.intro-link');

window.onscroll = function() {
  if(window.scrollY > (intro.scrollHeight - nav.offsetHeight)) {
    nav.style.backgroundColor = 'rgba(34, 47, 62, 0.9)';
  } else {
    nav.style.backgroundColor = 'transparent';
  }

  if((window.scrollY + nav.offsetHeight) > introName.offsetTop) {
    introName.style.color = 'transparent';
  } else {
    introName.style.color = 'inherit';
  }

  if((window.scrollY + nav.offsetHeight) > introDescription.offsetTop) {
    introDescription.style.color = 'transparent';
  } else {
    introDescription.style.color = 'inherit';
  }

  if((window.scrollY + nav.offsetHeight) > introLink.offsetTop) {
    introLink.style.color = 'transparent';
    introLink.style.borderColor = 'transparent';
  } else {
    introLink.style.color = 'inherit';
    introLink.style.borderColor = 'inherit';
  }
}