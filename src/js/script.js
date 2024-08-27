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

  /* Это код для табов */
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  /* Это для переключения табов */
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toogleClass("catalog-item__list_active");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");
});
