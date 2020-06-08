$(document).ready(function() {
    $('.sidenav').sidenav();
    $(".slider").slider({ full_width: true });
    $('.parallax').parallax();
    $(".myreviews").carousel({
        numVisible: 7,
        shift: 10,
        padding: 55
    })
});

function toggleModal() {
    swal("So Sorry!", "I don't have content to show you!");
}