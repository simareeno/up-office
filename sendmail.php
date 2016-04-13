<?php
include 'ChromePhp.php';

if(isset($_POST) && !empty($_POST['data'])) {
	$apps = $_POST['data'];
    var_dump(json_decode($apps));
}

$msg = "<html>
<head>
<title>Заявки</title>
</head>

<body>
<h2>Заявки</h2>
<table cellspacing=\"10\" cellpadding=\"10\" border=\"0\" align=\"left\">
<tr>
<td style=\"color:grey\">Имя</td>
<td style=\"color:grey\">Образование</td>
<td style=\"color:grey\">Год</td>
<td style=\"color:grey\">Телефон</td>
<td style=\"color:grey\">Почта</td>
</tr>
";

foreach ($apps as $key => $value) {
$app = json_decode($value);

    $msg .= '<tr> <td>';
    $msg .= $app->name;
    $msg .= '</td><td>';
    $msg .= $app->education;
	$msg .= '</td><td>';
	$msg .= $app->year;
	$msg .= '</td><td>';
	$msg .= $app->phone;
	$msg .= '</td><td>';
	$msg .= $app->mail;
    $msg .= '</td></tr>';
}

$msg .= "</table>
</body>
</html>";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: Sima Chetverukhin <sima@chetverukhin.ru>' . "\r\n";
$subject = 'Заявки в программу «Вверх»';

mail('serafimmaslov@yandex.ru', $subject, $msg, $headers);
?>
