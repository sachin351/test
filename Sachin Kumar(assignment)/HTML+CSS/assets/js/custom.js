$(document).ready(function () {
  // hamburger
  $('.hamburger').click(function () {
    $('.navigation').slideToggle();
    $(this).toggleClass('active');
  });
  if ($(window).width() < 767) {
    $('.search-bar button').click(function () {
      $('.search-bar input').slideToggle();
    });
  }
  // banner slider
  $('.banner-slide-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
  });
  $('.banner-slide-wrapper .slick-arrow').addClass('icon-arrow');
  // product slider
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.product-slider .slick-arrow').addClass('icon-arrow-button');
});