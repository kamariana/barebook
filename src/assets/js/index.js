/**
 * Toggle Fullscreen Navigation
 */
(() => {

  const openNavigation = document.querySelectorAll('.js-open-nav')
  const closeNavigation = document.querySelector('.js-close-nav')
  const fullscreenNavigation = document.querySelector('.js-fullscreen-nav')
  
  const open = () => {
    fullscreenNavigation.classList.add('is-open')
  }

  const close = () => {
    fullscreenNavigation.classList.remove('is-open')
  }

  openNavigation.forEach(nav => {
    nav.addEventListener('click', open)
  })

  if (closeNavigation) {
    closeNavigation.addEventListener('click', close)
  }

})();




/**
 * Hide navbar on scroll down and show on scroll up
 */

(() => {

  const navbar = document.querySelector('.js-navbar')
  let currentPosition = 0

  window.addEventListener('scroll', (event) => {
      let top = window.scrollY

      if (currentPosition < top && top > 16) {
        navbar.classList.add('on-scroll-down')
        navbar.classList.remove('on-scroll-up')
      } else {
        navbar.classList.remove('on-scroll-down')
        navbar.classList.add('on-scroll-up')
      }

      currentPosition = top

      if (currentPosition === 0) {
        navbar.classList.remove('on-scroll-up', 'on-scroll-down')
      }
  })

})();