<?php

$recepient = "youmail@ya.ru";
$sitename = "Название сайта";



$gorod = trim($_GET["gorod"]);
$phone = trim($_GET["phone"]);
$name = trim($_GET["name"]);
$mail = trim($_GET["mail"]);
$company = trim($_GET["company"]);
$dolj = trim($_GET["dolj"]);
$razd = trim($_GET["razd"]);
$viddey = trim($_GET["viddey"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Город: $gorod \nТелефон: $phone \nИмя: $name \nПочта: $mail \nКомпания: $company \nДолжность: $dolj \nРазделы: $razd \nВид деятельности: $viddey";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");