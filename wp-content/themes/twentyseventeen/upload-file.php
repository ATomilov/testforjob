<?php
require_once('../../../wp-load.php');
get_header();
$target_dir = dirname( __FILE__ ) . "/uploads_new";
$target_file = $target_dir . '/' . basename($_FILES["fileToUpload"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
      move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
      // echo "File is an image - " . $check["mime"] . ".";
      echo $_FILES["fileToUpload"]["name"] . "<br>";
      var_dump($_FILES) . "<br>";
      if ( ! empty( $_POST['post_id'] ) ) {
        update_post_meta( $_POST['post_id'], 'Uploaded_image', sanitize_text_field( $_FILES["fileToUpload"]["name"] ) );
      }
    } else {
        echo "File is not an image.";
    }
}
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
}
get_footer();
?>