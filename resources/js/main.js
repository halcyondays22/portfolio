console.log("Connected!");

AOS.init();

//Makes X change to hamburger on click of link inside of nav menu
$(".nav-link").click(function() {
    if (!$(".nav-link").hasClass("dropdown-toggle") && !$("#mobile-nav-button").hasClass("show")) {
        $("#mobile-nav-button").removeClass("fa-bars").addClass("fa-times");
    } else {
        $("#mobile-nav-button").removeClass("fa-times").addClass("fa-bars");
    }
})

//Makes hamburger change to X on click of hamburger button and back on click
$("#mobile-nav-button").click(function() {
    if (!$("#navbarSupportedContent").hasClass("show")) {
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