<?php
header("access-control-allow-origin: *");
header("access-control-allow-methods: POST");
header("Access-Control-Allow-Headers: Content-Type"); 
include "footer.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $sql = "INSERT INTO `contact`(`name`, `email`, `phone`) VALUES ('$name','$email','$phone')";
    $res = mysqli_query($conn, $sql);
    if ($res) {
        echo "Data Inserted Successfully";
    } else {
        echo "Data Insertion Failed";
    }
} 
?>
