
// Smooth Scrolling "Jquery"
$('.navbar a, #main-footer a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 55
      },
      800
    );
  }
});

