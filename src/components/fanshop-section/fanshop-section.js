$(document).ready(function () {
  var $slider = $(".fanshop-section__row");
  var initialized = false;

  var sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  function checkAndInitializeSlider() {
    var elementCount = $slider.children(".fanshop__item").length;

    if (
      !initialized &&
      (elementCount > 5 || (elementCount <= 5 && $(window).width() < 1001))
    ) {
      $slider.slick(sliderSettings);
      initialized = true;
    } else if (initialized && elementCount <= 5 && $(window).width() >= 1001) {
      $slider.slick("unslick");
      initialized = false;
    }
  }

  checkAndInitializeSlider();

  $(window).on("resize", function () {
    checkAndInitializeSlider();
  });
});
