$(document).ready(function() {
    const body = $('body');
    const slider = $('.testimonials__slider');
    
    // Header burger
    $('.header__burger').on('click', function() {
        $(this).toggleClass('active');
        $('.header__menu').fadeToggle();
        body.toggleClass('active');
    })

    // Faq section
    $('.faq__item h3').on('click', function() {
        $(this).toggleClass('active');
        $(this).next().toggle();
    })
    
    // Testimonials
    slider.slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
          ]
          
    });

})