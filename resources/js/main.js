console.log("Connected!");

AOS.init();

//Makes X change to hamburger on click of link inside of nav menu
$(".nav-link:not(#navbarDropdown)").click(function() {
    if ($("#mobile-nav-button").hasClass("fa-bars")) {
        $("#mobile-nav-button").removeClass("fa-bars").addClass("fa-times");
    } else  {
        $("#mobile-nav-button").removeClass("fa-times").addClass("fa-bars");
    }
})

//Makes hamburger change to X on click of hamburger button and back on click
$("#mobile-nav-button").click(function() {
    if ($("#mobile-nav-button").hasClass("fa-bars")) {
        $("#mobile-nav-button").removeClass("fa-bars").addClass("fa-times");
    } else  {
        $("#mobile-nav-button").removeClass("fa-times").addClass("fa-bars");
    }
})

//Makes menu close when a link is clicked within menu
$("#navbarSupportedContent").on('show.bs.collapse', function () {
    $('.nav-link:not(#navbarDropdown)').click(function () {
        $("#navbarSupportedContent").collapse('hide');
    });
});


//Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
