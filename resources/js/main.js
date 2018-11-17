console.log("Connected!");

AOS.init();

$("#navbarSupportedContent").on('show.bs.collapse', function () {
    $('.nav-link:not(#navbarDropdown)').click(function () {
        $("#navbarSupportedContent").collapse('hide');
    });
});
