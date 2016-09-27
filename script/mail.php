<?php
$recepient = "overkloker@ukr.net";
$sitename = "XLformat";

$name = (isset($_POST['name'])) ? $_POST['name'] : '';
$phone = (isset($_POST['phone'])) ? $_POST['phone'] : '';
$email = (isset($_POST['email'])) ? $_POST['email'] : '';
$from = (isset($_POST['from'])) ? $_POST['from'] : '';


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "
<html>
<head>
    <title>Order</title>
</head>
<body>

<p>От: <strong>\n$from\n</strong></p>
<p><strong>Имя:</strong> \n$name\n</p>
<p><strong>Телефон:</strong> \n$phone\n</p>
<p><strong>E-mail:</strong> \n$email\n</p>

</body>
</html>
";



mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $email");

echo "OK";
?>