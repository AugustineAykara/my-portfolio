<?php

  if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $mail = $_POST['email'];
    $message = $_POST['message'];


      $mailto = "augustine@aykara4.com";
      $mailfrom = $mail;

      $subject1 = "Form Submission (from your porfolio)";
      $subject2 =  "Copy of your form submission";

      $msg1 = " Message is : \n\n".$message;
      $msg2 = "Here is a copy of your message ".name."\n\n".$message;

      $header1 = "Client e-mail  : ".$mail."\n"."Client name  : ".$name;
      $header2 = "From : ".$mailto;

      mail($mailto, $subject1, $msg1, $header1);
      mail($mailfrom, $subject2, $msg2, $header2);
 ?>

      <script type="text/javascript">
          alert("The form has been submitted successfully and will respond to you as soon as possible.");
          location.href="contact.html";
      </script>

<?php
 }
?>
