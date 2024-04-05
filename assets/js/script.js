$(function () {
    //previene el comportamiento predeterminado sobre el atributo hash y anima el scrollTop
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
    //cambia el fondo del navbar segun se desplaza al alcanzar la altura maxima del carousel
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var carouselHeight = $('#carouselExampleControls').height(); // Altura del carrusel
        if (y > carouselHeight - 100) { // Cambiar clase antes de alcanzar el máximo del carrusel
            $('.navbar').removeClass('bg-transparent').addClass('bg-dark');
        } else {
            $('.navbar').removeClass('bg-dark').addClass('bg-transparent');
        }
    });
    //inicializa los tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});