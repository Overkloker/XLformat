/**
 * Created by Frank on 28.09.2016.
 */
$(document).ready(function () {
  $('#home').click(function () {
    window.location = "landing.html"
  });
});

var sendForm = function (id, from, require) {
  event.preventDefault();
  var name = $("#" + id).find("input[name='name']").val();
  var phone = $('#' + id).find("input[name='phone']").val();
  var email = $("#" + id).find("input[name='email']").val();
  if (phone == "") {
    $('#' + id).find("input[name='phone']").addClass('error')
  }
  if (name == "") {
    $('#' + id).find("input[name='name']").addClass('error')
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
      url: '/script/mail.php',
      data: sendData
    });
};