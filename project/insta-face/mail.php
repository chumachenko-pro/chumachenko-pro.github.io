<?php

$recepient = "constantin.chumachenko@yandex.ru";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$text = trim($_GET["e-mail"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nПочта: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");