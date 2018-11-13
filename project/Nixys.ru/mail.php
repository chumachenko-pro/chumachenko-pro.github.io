<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['tel'])) {$tel = $_POST['tel'];}
    if (isset($_POST['url'])) {$url = $_POST['url'];}
    if (isset($_POST['desc'])) {$desc = $_POST['desc'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
	
    $to = "m.sidorov@nixys.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $headers .= "From: Отправитель <openinaa@bget.ru>\r\n"; /*-- Эту строку можно удалить --*/
    $subject = "$formData";
	$message = "$formData\n\n";
	if ($url != null) {
	    $message .= "Ссылка на сайт: $url\n\n";
	}
	if ($name != null) {
	    $message .= "Имя: $name \n\n";
	}
	if ($tel != null) {
	    $message .= "Контактные данные: $tel \n\n$desc";
	} else {
	    $message .="$desc";
	}
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo "<center>Спасибо! Ваше сообщение отправлено!</center>";
    }
    else 
    {
    echo "<center><b>Ошибка. Сообщение не отправлено!</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>