/**
 * Created by Frank on 24.09.2016.
 */
//label scroll DISABLE
document.getElementById('necessary').onclick = function () {
  enableScroll();
  showBlockUTP();
};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

var disableScroll = function () {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
};

var enableScroll = function () {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
};

// заблокировать скролл
disableScroll();

// label SCROLL EFFECT
var scrollDoc;
$(document).on('scroll', function () {
  scrollDoc = $(window).scrollTop();
  if (scrollDoc > 0) {
    // $('.b-get-free-wrapper1').addClass('hide-block-utp');
    // enableScroll();
  }
});

var showBlockUTP = function () {
  $('.b-get-free-wrapper1').addClass('hide-block-utp');
  $('.b-get-free-wrapper2').addClass('show-block-utp');
};

$("#necessary2").click(function() {
  $('html, body').animate({
    scrollTop: $("#block-2").offset().top
  }, 850);
});

//----------------------------------------------------------------------------------------------------
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

// label mask
jQuery(function ($) {
  $(".phone").mask("+38(999) 999-9999");
});

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
