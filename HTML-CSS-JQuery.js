$(document).ready(function () {
    $('.dropdown').click(function (event) { 
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    });
});

$(document).ready(function () {
    lightbox.option({
        'resizeDuration':  800,
        'wrapAround': true,
    });
});
