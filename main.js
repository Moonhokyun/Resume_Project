// Dropdown

function f() {
  document.getElementsByClassName('nav-dropdown')[0].classList.toggle('down');
  if (document.getElementsByClassName('nav-dropdown')[0].classList.contains('down')) {
    setTimeout(function () {
      document.getElementsByClassName('nav-dropdown')[0].style.overflow = 'visible'
    }, 500)
  } else {
    document.getElementsByClassName('nav-dropdown')[0].style.overflow = 'hidden'
  }
}
// Dropdown


// Scroll Effect

function isElementUnderBottom(elem, triggerDiff) {
  const {
    top
  } = elem.getBoundingClientRect();
  const {
    innerHeight
  } = window;
  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  const elems = document.querySelectorAll('.up-on-scroll');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -20)) {
      elem.style.opacity = "0";
      elem.style.transform = 'translateY(70px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(0px)';
    }
  })
}

window.addEventListener('scroll', handleScroll);
// Scroll Effect


// Photo slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Photo slide
