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
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
// Photo slide
