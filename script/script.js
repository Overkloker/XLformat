/**
 * Created by Frank on 24.09.2016.
 */
//label scroll DISABLE
// document.getElementById('necessary').onclick = function () {
  // enableScroll();
  // showBlockUTP();
// };

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

// заблокировать скролл
// disableScroll();
window.scrollBy(0, 1);

// label SCROLL EFFECT
var scrollDoc;
var ok = true;
$(window).on('scroll', function () {
  scrollDoc = $(window).scrollTop();
  if (ok) {
    if (scrollDoc > 50) {
      ok = false;
      disableScroll();
      showBlockUTP();
      console.log('disable');
      setTimeout(function () {
        console.log('enable');
        enableScroll();
      }, 3000)
    }
  }

  if (scrollDoc > 0) {
    // $('.b-get-free-wrapper1').addClass('hide-block-utp');
    // enableScroll();
  }
});

var showBlockUTP = function () {
  $('.b-get-free-wrapper1').addClass('hide-block-utp');
  $('.b-get-free-wrapper2').addClass('show-block-utp');
};

$("#necessary2").click(function () {
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
  $('.acc').accordion({
    transitionSpeed: 300,
    transitionEasing: 'ease',
    controlElement: '[data-control]',
    contentElement: '[data-content]',
    groupElement: '[data-accordion-group]',
    singleOpen: true
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

//----------------------------------------------------------------------------------------------------

var sendForm = function (id, from, require) {
  event.preventDefault();
  var name = $("#" + id).find("input[name='name']").val();
  var phone = $('#' + id).find("input[name='phone']").val();
  var email = $("#" + id).find("input[name='email']").val();
  console.log(phone);
  if (phone == "") {
    $('#' + id).find("input[name='phone']").addClass('error')
  }
  if (name == "") {
    $('#' + id).find("input[name='name']").addClass('error')
  }

  if (require) {
    if (email != "") {
      $('#' + id).find("input[name='email']").removeClass('error')
    }
    if (email == "") {
      $('#' + id).find("input[name='email']").addClass('error')
    }
  }


  if (phone != "") {
    $('#' + id).find("input[name='phone']").removeClass('error')
  }
  if (name != "") {
    $('#' + id).find("input[name='name']").removeClass('error')
  }

  var sendData = {
    phone: phone,
    name: name,
    email: email,
    from: from
  };

  if (phone != "" && name != "" && email != "")
    $.ajax({
      type: "POST",
      url: '/XLformat/script/mail.php',
      data: sendData,
      success: function () {
        window.location = "thank.html";
        // $('.b-thank-you').addClass('show-thank-you');
        $('.b-get-free-wrapper1').addClass('hide-block-utp');
        $('.b-get-free-wrapper2').addClass('hide-block-utp');
        // $('.b-consultation-request-wrapper').addClass('hide-block-utp');

        // $('html, body').animate({
        //   scrollTop: $("body").offset().top
        // }, 1000);
      }
    });
};