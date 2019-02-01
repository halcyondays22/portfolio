console.log("Connected!");

AOS.init();

//Makes X change to hamburger on click of link inside of nav menu
$(".nav-link:not(#navbarDropdown)").click(function() {
    $("#mobile-nav-button").toggleClass("is-active");
})

//If Collapses navbar when clicking on tomraley when mobile navbar is shown
$("#home-button").click(function () {
    $("#mobile-nav-button").toggleClass("is-active");
    $("#navbarSupportedContent").collapse("hide");
})

//Makes hamburger change to X on click of hamburger button and back on click
$("#mobile-nav-button").click(function() {
    $("#mobile-nav-button").toggleClass("is-active");
});

//Makes menu close when a link is clicked within menu
$("#navbarSupportedContent").on('show.bs.collapse', function () {
    $('.nav-link:not(#navbarDropdown)').click(function () {
        $("#navbarSupportedContent").collapse('hide');
    });
});
