/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})

/* slider show */

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Show the current slide
function showSlide(index) {
  // Loop to the beginning/end if index exceeds bounds
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  // Hide all slides and deactivate dots
  slides.forEach(slide => slide.style.display = 'none');
  dots.forEach(dot => dot.classList.remove('active'));

  // Show current slide and activate corresponding dot
  slides[currentSlide].style.display = 'block';
  dots[currentSlide].classList.add('active');
}

// Change slide by offset (-1 for prev, +1 for next)
function changeSlide(offset) {
  currentSlide += offset;
  showSlide(currentSlide);
}

// Go to a specific slide
function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto-play slides every 5 seconds
function autoPlay() {
  changeSlide(1);
  setTimeout(autoPlay, 5000);
}

// Initialize the slideshow
showSlide(currentSlide);
autoPlay();


