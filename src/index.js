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
  console.log('close');
  toggleMenu();
});

mobileMenuButton.addEventListener('click', function(e) {
  console.log('open');
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

copyButton.addEventListener('click', function(e) {
  console.log('click');
  var url = window.location.href;

  var input = document.createElement('input');
  input.setAttribute("type", "hidden");
  input.setAttribute("name", "hidden_copy");
  input.setAttribute("value", "hidden_copy");
  input.setAttribute("id", "hidden_copy");
  document.body.appendChild(input);

  console.log(document.getElementById('hidden_copy'));

  var hiddenCopyField = document.getElementById('hidden_copy');
  hiddenCopyField.select();
  document.execCommand('copy');
});
