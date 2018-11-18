console.log("Connected!");

AOS.init();

$("#navbarSupportedContent").on('show.bs.collapse', function () {
    $('.nav-link:not(#navbarDropdown)').click(function () {
        $("#navbarSupportedContent").collapse('hide');
    });
});

$("#mobile-nav-button").click(function() {
    if (!$("#navbarSupportedContent").hasClass("show")) {
        $("#mobile-nav-button").removeClass("fa-bars").addClass("fa-times");
    } else  {
        $("#mobile-nav-button").removeClass("fa-times").addClass("fa-bars");
    }
})