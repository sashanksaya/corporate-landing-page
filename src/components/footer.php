<?php
header("access-control-allow-origin: *");
header("access-control-allow-methods: POST");

$host = "localhost"; // Change to your MySQL host if different
$username = "root"; // Change to your MySQL username if different
$password = ""; // Change to your MySQL password if set
$database = "it_raid"; // Change to your database name

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

// //$conn = new mysqli("localhost", "root", "", "it_raid");
// if(mysqli_connect_errno()){
//     echo "Connection Fail".mysqli_connect_error();
// }
// else{
//     $name=$_POST['name'];
//     $email=$_POST['email'];
//     $phone=$_POST['phone'];
//     $sql = "INSERT INTO `contact`(`name`, `email`, `phone`) VALUES ('$name','$email','$phone')";
//     $res = mysqli_query($conn,$sql);
//     if($res){
//         echo "Data Inserted Successfully";
//     }
//     else{
//         echo "Data Insertion Failed";
//     }
// }