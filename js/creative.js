(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing  
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  
  // Activate scrollspy to add active class to navbar items on scroll
  /*
  $('body').scrollspy({
    target: '#mainNavbar',
    offset: 57
  });
  */

  // Collapse Navbar
  // When the main navbar at the top of the page is more than 100px from the 
  // top of the document, we add the navbar-shrink class to the markup of the 
  // main navbar. The navbar can then be accessed by the css to change the 
  // colour of its background. 
  var navbarCollapse = function() {
    if ($("#mainNavbar").offset().top > 100) {
      $("#mainNavbar").addClass("navbar-shrink"); 
      console.log("here");
    } else {
      $("#mainNavbar").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  
  $('#sideMenu .nav-pills .nav-item a').hover(function() {
    console.log("qwdwdwdqW");
    /*$(this).css({
      color: 'red'
    });*/
    });
  
  $('ul.navbar-nav.ml-auto li.dropdown.nav-item').hover(function() {
  console.log('wdwwefwfeF');
  $(this).find('div.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, 
  function() {
  $(this).find('div.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
  
  // Scroll reveal calls
  
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
