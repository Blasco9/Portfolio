const nav = document.querySelector('.navbar-wrapper');
const intro = document.querySelector('.intro');
const introName = document.querySelector('.intro-name');
const introDescription = document.querySelector('.intro-description');
const introLink = document.querySelector('.intro-link');
const project1 = document.querySelector('.project-card');
const project2 = document.querySelector('.project-card:nth-of-type(2)');
const project3 = document.querySelector('.project-card:nth-of-type(3)');

window.onscroll = function() {
  if(window.scrollY > (intro.scrollHeight - nav.offsetHeight)) {
    nav.style.backgroundColor = 'rgba(34, 47, 62, 0.9)';
  } else {
    nav.style.backgroundColor = 'transparent';
  }

  if((window.scrollY + nav.offsetHeight + 50) > introName.offsetTop) {
    introName.style.color = 'transparent';
  } else {
    introName.style.color = 'inherit';
  }

  if((window.scrollY + nav.offsetHeight + 50) > introDescription.offsetTop) {
    introDescription.style.color = 'transparent';
  } else {
    introDescription.style.color = 'inherit';
  }

  if((window.scrollY + nav.offsetHeight + 50) > introLink.offsetTop) {
    introLink.classList.add('intro-link-inactive');
  } else {
    introLink.classList.remove('intro-link-inactive');
  }

  if((window.scrollY + nav.offsetHeight) > project1.offsetTop) {
    project1.classList.remove('slide-right')
    project1.classList.add('slide-left')
  } else {
    project1.classList.remove('slide-left')
    project1.classList.add('slide-right')
  }

  if((window.scrollY + nav.offsetHeight) > project2.offsetTop) {
    project2.classList.remove('slide-right')
    project2.classList.add('slide-left')
  } else {
    project2.classList.remove('slide-left')
    project2.classList.add('slide-right')
  }

  if((window.scrollY + nav.offsetHeight) > project3.offsetTop) {
    project3.classList.remove('slide-right')
    project3.classList.add('slide-left')
  } else {
    project3.classList.remove('slide-left')
    project3.classList.add('slide-right')
  }
}
