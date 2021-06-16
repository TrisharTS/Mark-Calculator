 <?php
// define variables and set to empty values
$nameErr = $emailErr = $phoneErr = "";
$name = $mail = $phone = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST")
 {
  if (empty($_POST["name"]))
   {
    $nameErr = "Error";
  }
  else
   {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["mail"]))
   {
    $emailErr = "Email is required";
  }
   else
   {
    $mail = test_input($_POST["mail"]);
    // check if e-mail address is well-formed
    if (!filter_var($mail, FILTER_VALIDATE_EMAIL))
    {
      $emailErr = "Invalid email format";
    }
  }
  if (empty($_POST["phone"]))
   {
    $phoneErr = "phone is required";
  }
   else
   {
    $phone = test_input($_POST["phone"]);
    $phone = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
  }
  if (empty($_POST["message"])) {
    $message = "";
  }
  else
   {
    $message = test_input($_POST["message"]);
  }
  }
  function test_input($data)
 {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
 }


?>
