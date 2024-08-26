$(function () {
  $(".carousel__inner").slick({
    infinite: true,
    speed: 1200,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/slider/prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/slider/next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
