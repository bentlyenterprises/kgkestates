document.addEventListener('DOMContentLoaded', function(){
  const nav = document.querySelector('.main-nav');
  const offset = 50;

  function onScroll(){
    if (window.scrollY > offset) {
      nav.classList.add('solid');
      nav.classList.remove('transparent');
    } else {
      nav.classList.add('transparent');
      nav.classList.remove('solid');
    }
  }

  onScroll();
  window.addEventListener('scroll', onScroll);
});