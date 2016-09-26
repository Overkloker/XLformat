/**
 * Created by Frank on 24.09.2016.
 */
// label slick
$(document).ready(function () {
  $('.b-slick-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<a href="" class="b-slick-prev"></a>',
    nextArrow: '<a href="" class="b-slick-next"></a>',
    autoplay: true,
    autoplaySpeed: 2000
  });
});

// label wow
new WOW().init();

$(document).ready(function () {
  //label accordion FAQ
  $(".e-faq-title").click(function () {
    $('.b-faq-content').slideUp();
    $(this).next().toggle("fast", function () {
    });
    $(this).toggleClass("active")
  });

  //label show header
  $(document).on('scroll', function () {
    var scroll = $(this).scrollTop();
    if (scroll >= $('.b-necessary-refer-wrapper').position().top) {
      $('.b-plash-wrapper').addClass('show-el');
    }
    if (scroll < $('.b-necessary-refer-wrapper').position().top) {
      $('.b-plash-wrapper').removeClass('show-el');
    }
  });

  // label fancybox
  $('.fancybox').fancybox();
});
