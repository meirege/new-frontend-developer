import './index.scss';

// Hamburger menu.
var mobileMenuButton = document.getElementById('mobile-menu-button');
var mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
var mobileMenu = document.getElementById('mobile-menu');

var mobileMenuIsOpen = false;

/*
 * Toggle the mobile menu.
 */
function toggleMenu() {
  if (mobileMenuIsOpen) {
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenuIsOpen = false;
  }
  else {
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenuIsOpen = true;
  }
};

/*
 * Add event listeners.
 */
mobileMenuCloseButton.addEventListener('click', function(e) {
  toggleMenu();
});

mobileMenuButton.addEventListener('click', function(e) {
  toggleMenu();
});


// Carousel.
var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  fade: true,
  lazyLoad: true,
  prevNextButtons: false,
});


// Copy to clipboard
var copyButton = document.querySelector('.social-copy');
var copyConfirmation = document.querySelector('.copy-confirmation');

copyButton.addEventListener('click', function(e) {
  var url = window.location.href;

  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = url;
  document.body.appendChild(tempInput);
  tempInput.select();

  var success = document.execCommand("copy");
  if (success) {
    copyConfirmation.classList.add('js-visible');
    setTimeout(function(){
      copyConfirmation.classList.remove('js-visible');
    }, 1500);
  }

  document.body.removeChild(tempInput);
});
