$(window).on("load", function () {
  $("#status").fadeOut(1000);
  $("#preloader").delay(1100).fadeOut(1000);
});
$(document).ready(function () {
  $("#team-members").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
// Progress Bar
$(document).ready(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          3000
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});
// Responsive Tab Service Section
$(document).ready(function () {
  $("#services-tab").responsiveTabs({
    animation: "slide",
  });
});
// Portfolio
$(window).on("load", function () {
  // init Isotope
  $(".isotope-container").isotope({
    // options
  });
  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $(".isotope-container").isotope({ filter: filterValue });
    // -----Active Button-----
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
//Magnifier
$(document).ready(function () {
  $(".isotope-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: { enable: true },
    // other options
  });
});
//Testomonial Section
$(document).ready(function () {
  $("#testomonial-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
//Stats Section
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
// ---Client Section---
$(".client-list").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});