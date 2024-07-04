// SIDEBAR

// TO OPEN SIDEBAR

$("aside .swipe").on("click", function () {
  $("aside .outer").animate({ width: "250px" }, 1000);
  $("aside .outer .links a").slideDown(1500);
  $("aside .swipe").fadeOut(500);
});

// TO CLOSE SIDEBAR

$("aside .close").on("click", function () {
  $("aside .outer .links a").slideUp(500);
  $("aside .outer").animate({ width: 0 }, 1000);
  $("aside .swipe").fadeIn(500);
});

let sectionOffset = $("#artist").offset().top;

$("aside a").on("click", function (e) {
  let currentLink = e.target.getAttribute("href");
  let sectionOffset = $(currentLink).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, 1000);
});

// SIDEBAR

// ARTEST

// TO OPEN ARTEST CONTENT
$(".artist .box .title").on("click", function () {
  $(".artist .box .content").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

// ARTEST

// CONTACT
let contactOffset = $("#conctact").offset().top;

$(window).on("scroll", function () {
  let currentScroll = $(window).scrollTop();
  if (currentScroll > contactOffset) {
    $(".contact").show(2000, function () {
      $(".contact .contact-info").slideDown(2000, function () {
        $(".contact .form").fadeIn(2000);
      });
    });
  }
});

let maxLength = 100;
$("textarea").on("keyup", function () {
  let length = $("textarea").val().length;
  let left = maxLength - length;
  if (left <= 0) {
    $(".letters-left").text("your available character finished");
  } else {
    $(".letters-left").text(`${left} Left`).css("color", "#BB2D3B");
  }
});
// CONTACT
