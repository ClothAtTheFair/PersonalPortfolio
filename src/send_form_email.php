<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if(empty($_POST['name']) && empty($_POST['email'])) die();

if($_POST)
{
    http_response_code(200);
    $subject = $_POST['name'];
    $to = "bradleycodes@gmail.com";
    $from = $_POST['email'];

    $msg = $_POST['number'] . $_POST['message'];
    $headers = "MIME-Version: 1.0";
    $headers.= "Content-type: text/html; charset=UTF-8";
    $header.= "From: <" . $from . ">";
    mail($to, $subject, $msg, $headers);

    echo json_decode(array("sent" => true));

}
else 
{
    echo json_decode(["sent" => false, "message" => "Something went wrong, please try again later"]);
}
?>