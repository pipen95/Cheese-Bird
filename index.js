// CDN img optimisation
(() => {
  const baseUrl = "https://res.cloudinary.com/pipen95/image/upload/";

  Array.from(document.querySelectorAll("[data-bg]")).forEach(image => {
    const { clientWidth, clientHeight } = image;
    const pixelRatio = window.devicePixelRatio || 1.0;
    const imageParams = `w_${100 *
      Math.round((clientWidth * pixelRatio) / 100)},h_${100 *
      Math.round((clientHeight * pixelRatio) / 100)},c_fill,g_auto,f_auto`;
    const url = `${baseUrl}/${imageParams}/${image.dataset.bg}`;
    image.style.backgroundImage = `url('${url}')`;
  });
})();

// Sticky Navigation
$(document).ready(function() {
  $(".js__features").waypoint(
    function(direction) {
      if (direction == "down") {
        $(".nav").addClass("nav--sticky") &&
          $(".mobile").addClass("mobile--sticky") &&
          $(".heading__primary--2").addClass("heading__primary--sticky");
      } else {
        $(".nav").removeClass("nav--sticky") &&
          $(".mobile").removeClass("mobile--sticky") &&
          $(".heading__primary--2").removeClass("heading__primary--sticky");
      }
    },
    {
      offset: "150px;"
    }
  );
  // Srcoll on buttons
  $(".js__scroll-to-header").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js__header").offset().top
      },
      1500
    );
  });

  $(".js__scroll-to-features").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js__features").offset().top - 100
      },
      1500
    );
  });

  $(".js__scroll-to-boxes").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js__boxes").offset().top - 100
      },
      1500
    );
  });

  $(".js__scroll-to-sub").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js__sub").offset().top - 100
      },
      1500
    );
  });
  // Mobile navigation
  $(".js__open,.js__close").click(function() {
    var nav = $(".js__nav-list");
    var open = $(".js__open");
    var close = $(".js__close");

    nav.slideToggle(400);
    if (open.hasClass("display")) {
      open.removeClass("display");
      close.addClass("display");
    } else {
      close.removeClass("display");
      open.addClass("display");
    }
  });
});
