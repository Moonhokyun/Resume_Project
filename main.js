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