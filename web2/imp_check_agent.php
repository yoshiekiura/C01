<?php
session_start();
$skip_authentication = 1;
include "../includes/functions.php";
include_once "includes/wr_tools.php";
$lines = "a=1";
if ($mysql['crypt_key'] != '') {
   $crypt_key = $mysql['crypt_key'];
}
$postmode = anti_injection(@$_GET['postmode']);
$response    = array();
if($postmode == 'upline'):
  $var_to_pass = null;
  $output      = "true";
  $upline      = $_POST['upline'];
  $query       = "SELECT * FROM usercompany";
  $result      = $DB->execresultset($query);
  foreach ($result as $key => $value) {
     $companys = $value;
  }
  if ($upline == $companys['admin_email']) {
     $output = true;
  } else {
     $output = false;
     $query  = "SELECT aecode FROM client_aecode WHERE aecode = '$upline' AND suspend = '0'";
     $result = $DB->execresultset($query);
     foreach ($result as $key => $value) {
        $aecode = $value['aecode'];
        $output = true;
     }
  }

else:
  $upline = anti_injection(@$_POST['agen']);
  $var_to_pass = null;
  $output      = "true";
  // $upline      = $_POST['upline'];
  $query       = "SELECT * FROM usercompany";
  $result      = $DB->execresultset($query);
  foreach ($result as $key => $value) {
     $companys = $value;
  }
  if ($upline == $companys['admin_email']) {
     $output = true;
  } else {
     $output = false;
     $query  = "SELECT aecode FROM client_aecode WHERE aecode = '$upline' AND suspend = '0'";
     $result = $DB->execresultset($query);
     foreach ($result as $key => $value) {
        $aecode = $value['aecode'];
        $output = true;
     }
  }
endif;


// $output = "false";
$response['valid'] = $output;
echo json_encode($response);
