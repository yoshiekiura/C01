<?php /* Smarty version 3.1.27, created on 2016-09-10 10:59:50
         compiled from "D:\web-dir\git\cabinet\web2\templates\openaccount.htm" */ ?>
<?php
/*%%SmartyHeaderCode:2121557d38536928dd9_09004049%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '04dd83d9b531578cbbca0cb7ec57d20d1ef7a544' => 
    array (
      0 => 'D:\\web-dir\\git\\cabinet\\web2\\templates\\openaccount.htm',
      1 => 1473476473,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2121557d38536928dd9_09004049',
  'variables' => 
  array (
    'companys' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_57d38536dd67d2_22953549',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_57d38536dd67d2_22953549')) {
function content_57d38536dd67d2_22953549 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2121557d38536928dd9_09004049';
?>
<!DOCTYPE html>
<html>
   <!-- Mirrored from hubancreative.com/projects/templates/coco/corporate/form-validation.html by HTTrack Website Copier/3.x [XR&CO'2013], Sun, 02 Nov 2014 15:12:59 GMT -->
   <head>
      <meta charset="utf-8"/>
      <title>
         <?php echo $_smarty_tpl->tpl_vars['companys']->value['programname'];?>

      </title>
      <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"/>
      <meta content="yes" name="apple-mobile-web-app-capable"/>
      <meta content="" name="description"/>
      <meta content="Komoditas,Commodity,Multilateral,Pasar,Market,Berjangka,Derivatives,Futures" name="keywords"/>
      <meta content="" name="author"/>
      <!-- Base Css Files -->
      <link href="assets/libs/jqueryui/ui-lightness/jquery-ui-1.10.4.custom.min.css" rel="stylesheet"/>
      <link href="assets/libs/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
      <link href="assets/libs/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
      <link href="assets/libs/fontello/css/fontello.css" rel="stylesheet"/>
      <link href="assets/libs/animate-css/animate.min.css" rel="stylesheet"/>
      <link href="assets/libs/nifty-modal/css/component.css" rel="stylesheet"/>
      <link href="assets/libs/magnific-popup/magnific-popup.css" rel="stylesheet"/>
      <link href="assets/libs/ios7-switch/ios7-switch.css" rel="stylesheet"/>
      <link href="assets/libs/pace/pace.css" rel="stylesheet"/>
      <link href="assets/libs/sortable/sortable-theme-bootstrap.css" rel="stylesheet"/>
      <link href="assets/libs/bootstrap-datepicker/css/datepicker.css" rel="stylesheet"/>
      <link href="assets/libs/jquery-icheck/skins/all.css" rel="stylesheet"/>
      <!-- Code Highlighter for Demo -->
      <link href="assets/libs/prettify/github.css" rel="stylesheet"/>
      <!-- Extra CSS Libraries Start -->
      <!-- <link href="assets/libs/bootstrap-validator/css/bootstrapValidator.min.css" rel="stylesheet" type="text/css"/> -->
      <link href="assets/css/style.css" rel="stylesheet" type="text/css"/>
      <!-- Extra CSS Libraries End -->
      <link href="assets/css/style-responsive.css" rel="stylesheet"/>
      <!-- Validator -->
      <link href="custom/validator/dist/css/formValidation.min.css" rel="stylesheet"/>
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
        <?php echo '<script'; ?>
 src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"><?php echo '</script'; ?>
>
        <?php echo '<script'; ?>
 src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"><?php echo '</script'; ?>
>
        <![endif]-->
      <link href="<?php echo $_smarty_tpl->tpl_vars['companys']->value['company_icon'];?>
" rel="shortcut icon"/>
      <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
      <link href="assets/img/apple-touch-icon-57x57.png" rel="apple-touch-icon" sizes="57x57"/>
      <link href="assets/img/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72"/>
      <link href="assets/img/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76"/>
      <link href="assets/img/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114"/>
      <link href="assets/img/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120"/>
      <link href="assets/img/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144"/>
      <link href="assets/img/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152"/>
      <link href="custom/js/phone/intlTelInput.css" rel="stylesheet"/>
      <link href="custom/js/formhelpers/bootstrap-formhelpers.min.css" rel="stylesheet"/>
      
      <?php echo '<script'; ?>
 language="javascript">
      <?php echo '</script'; ?>
>
      
      <style type="text/css">
         .ina {
            font-style: italic;
            font-weight:normal;
        }
      </style>
   </head>
</html>
<body class="fixed-left">
   <!-- Begin page -->
   <div id="wrapper">
      <!-- Top Bar Start -->
      <div class="topbar">
         <div class="topbar-left">
            <div class="logo">
               <h1>
                  <a href="#">
                     <img alt="Logo" src="custom/pg/logo-transparan.png"/>
                  </a>
               </h1>
            </div>
         </div>
      </div>
      <div class="container">
         <!-- ============================================================== -->
         <!-- Start Content here -->
         <!-- ============================================================== -->
         <div class="content">
            <br/>
            <br/>
            <!-- Page Heading Start -->
            <div class="page-heading">
               <h1>
                  <i class="fa fa-magic">
                  </i>
                  Registration Form /
                  <span class="ina">
                     Form Registrasi
                  </span>
               </h1>
            </div>
            <!-- Page Heading End-->
            <div class="row">
               <div class="col-md-12 portlets">
                  <div class="widget">
                     <div class="widget-content padding">
                        <form action="openaccount2.php" class="form-horizontal" id="registerForm" method="post" role="form">
                           <div class="widget-content padding">
                              <div class="form-group">
                                 <label class="control-label">
                                    Nationality /
                                    <span class="ina">
                                       Negara
                                    </span>
                                 </label>
                                 <select class="form-control bfh-countries" data-country="AF" data-flags="true" id="nationality" name="nationality">
                                 </select>
                                 <p class="help-block">
                                 </p>
                              </div>
                              <div class="form-group">
                                 <label class="control-label" for="email">
                                    Email /
                                    <span class="ina">
                                       Alamat email
                                    </span>
                                 </label>
                                 <input class="form-control" name="email" type="text">
                                    <p class="help-block">
                                    </p>
                                 </input>
                              </div>
                              <div class="form-group">
                                 <div class="row">
                                    <div class="col-sm-6">
                                       <label class="control-label" for="password">
                                          Password /
                                          <span class="ina">
                                             Kata sandi
                                          </span>
                                       </label>
                                       <input class="form-control" id="password" name="password" type="password">
                                          <p class="help-block">
                                          </p>
                                       </input>
                                    </div>
                                    <div class="col-sm-6">
                                       <label class="control-label" for="confirmPassword">
                                          Confirm Password /
                                          <span class="ina">
                                             Konfirmasi Kata sandi
                                          </span>
                                       </label>
                                       <input class="form-control" name="confirmPassword" type="password">
                                          <p class="help-block">
                                          </p>
                                       </input>
                                    </div>
                                 </div>
                              </div>
                              <div class="form-group">
                                 <div class="row">
                                    <div class="col-sm-12">
                                       <label class="control-label" for="register_name">
                                          Full Name /
                                          <span class="ina">
                                             Nama Lengkap
                                          </span>
                                       </label>
                                       <input class="form-control" id="register_name" name="register_name" placeholder="Full Name" type="text">
                                          <p class="help-block">
                                          </p>
                                       </input>
                                    </div>
                                 </div>
                              </div>
                              <input class="form-control datepicker-input" data-date-format="yyyy/mm/dd" name="register_birthday" type="hidden" value="1976/02/02">
                                 <div class="form-group">
                                    <div class="row">
                                       <div class="col-sm-6">
                                          <label class="control-label" for="description1">
                                             How do you know us ? /
                                             <span class="ina">
                                                Darimana anda tau kita ?
                                             </span>
                                          </label>
                                          <select class="form-control" id="description1" name="description1">
                                             <option value="Agent">
                                                Agent / Agen
                                             </option>
                                             <option value="Newspaper" selected>
                                                Mass Media / Media Masa
                                             </option>
                                          </select>
                                       </div>
                                       <div class="col-sm-6">
                                          <label class="control-label" for="upline" style="">
                                             Introducer Email Address /
                                             <span class="ina">
                                                Alamat email yang mengenalkan
                                             </span>
                                          </label>
                                          <style>
                                          .hiddenInput {
                                            display: none;
                                          }
                                          </style>
                                          <input class="form-control upline" id="upline" name="upline" value="<?php echo $_smarty_tpl->tpl_vars['companys']->value['email'];?>
" placeholder="<?php echo $_smarty_tpl->tpl_vars['companys']->value['email'];?>
" type="text" style=""/>
                                          <input class="form-control hiddenInput" id="agen" name="agen" placeholder="Please enter your agen email" type="text" style=""/>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group">

                                    <label>
                                       <input class="interests" name="acceptTerms" type="checkbox">
                                          <a href="<?php echo $_smarty_tpl->tpl_vars['companys']->value['companyname'];?>
 T&C.pdf" target="_blank">
                                             Terms and Conditions
                                          </a>
                                       </input>
                                    </label>
                                    <p class="help-block">
                                       Click CheckBox if you agree with  "Terms and Conditions"
                                    </p>
                                    <p class="help-block">
                                       <span class="ina">
                                          Centang Cekbox jika anda setuju dengan "syarat dan Ketentuan"
                                       </span>
                                    </p>
                                 </div>
                                 <div class="form-group">
                                    <label>
                                       Could you assist me to answer this question ?
                                       <p>
                                          <span class="ina">
                                             Bisakah Anda membantu Kami untuk menjawab pertanyaan ini?
                                          </span>
                                          <p>
                                          </p>
                                       </p>
                                    </label>
                                    <p>
                                       How much the total of this sum
                                       <label class="control-label" id="captchaOperation">
                                       </label>
                                    </p>
                                    <div class="row">
                                       <div class="col-sm-4">
                                          <input class="form-control" name="captcha" type="text"/>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group">
                                    <div class="notes">
                                       <label>
                                          <h4>
                                             <strong>
                                                Notes
                                             </strong>
                                          </h4>
                                       </label>
                                       <ol>
                                          <li>
                                             After registration, please check your email to validated your registration
                                          </li>
                                          <p class="help-block">
                                             <span class="ina">
                                                Setelah pendaftaran, silahkan cek email Anda untuk memvalidasi pendaftaran Anda
                                             </span>
                                          </p>
                                          <li>
                                             If you do not received the validation email, please contact admin at <?php echo $_smarty_tpl->tpl_vars['companys']->value['admin_email'];?>

                                          </li>
                                          <p class="help-block">
                                             <span class="ina">
                                                Jika Anda tidak menerima email validasi, silahkan hubungi admin di
                                             </span>
                                             <?php echo $_smarty_tpl->tpl_vars['companys']->value['admin_email'];?>

                                          </p>
                                       </ol>
                                    </div>
                                 </div>
                                 <div class="form-group">
                                    <div class="btn-group">
                                       <div id="thebutton">
                                          <input class="btn btn-info" type="submit" value="Register"/>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-group" id="themessage2">
                                 </div>
                              </input>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <!-- Footer Start -->
            <footer>
               <?php echo $_smarty_tpl->tpl_vars['companys']->value['companyname'];?>
 <?php echo $_smarty_tpl->tpl_vars['companys']->value['year'];?>

            </footer>
            <!-- Footer End -->
         </div>
         <!-- ============================================================== -->
         <!-- End content here -->
         <!-- ============================================================== -->
      </div>
      <!-- End right content -->
   </div>
   <!-- End of page -->
   <!-- the overlay modal element -->
   <div class="md-overlay">
   </div>
   <!-- End of eoverlay modal -->
   <?php echo '<script'; ?>
>
      var resizefunc = [];
   <?php echo '</script'; ?>
>
   <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
   <?php echo '<script'; ?>
 src="assets/libs/jquery/jquery-1.11.1.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/bootstrap/js/bootstrap.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="custom/js/formhelpers/bootstrap-formhelpers.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/jqueryui/jquery-ui-1.10.4.custom.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/jquery-ui-touch/jquery.ui.touch-punch.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/jquery-detectmobile/detect.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/jquery-animate-numbers/jquery.animateNumbers.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/ios7-switch/ios7.switch.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/fastclick/fastclick.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/jquery-blockui/jquery.blockUI.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/bootstrap-bootbox/bootbox.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/jquery-slimscroll/jquery.slimscroll.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/jquery-sparkline/jquery-sparkline.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/nifty-modal/js/classie.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/nifty-modal/js/modalEffects.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/sortable/sortable.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/bootstrap-fileinput/bootstrap.file-input.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/bootstrap-select/bootstrap-select.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/bootstrap-select2/select2.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/magnific-popup/jquery.magnific-popup.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/pace/pace.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/jquery-icheck/icheck.min.js">
   <?php echo '</script'; ?>
>
   <!-- Valdator -->
   <?php echo '<script'; ?>
 src="custom/validator/dist/js/formValidation.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="custom/validator/dist/js/framework/bootstrap.min.js">
   <?php echo '</script'; ?>
>
   <!-- Demo Specific JS Libraries -->
   <?php echo '<script'; ?>
 src="assets/libs/prettify/prettify.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/js/init.js">
   <?php echo '</script'; ?>
>
   <!-- Page Specific JS Libraries -->
   <?php echo '<script'; ?>
 src="custom/js/jquery.easyWizard.js">
   <?php echo '</script'; ?>
>
   <!-- <?php echo '<script'; ?>
 src="custom/js/jquery.validate.min.js" type="text/javascript"><?php echo '</script'; ?>
> -->
   <!-- <?php echo '<script'; ?>
 src="custom/js/bootstrapValidator.min.js"><?php echo '</script'; ?>
> -->
   <?php echo '<script'; ?>
 src="assets/libs/jquery-notifyjs/notify.min.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="assets/libs/jquery-notifyjs/styles/metro/notify-metro.js">
   <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="custom/js/noty_general.js">
   <?php echo '</script'; ?>
>
   
   <?php echo '<script'; ?>
 src="custom/js/open_account.js" type="text/javascript">
   <?php echo '</script'; ?>
>
   
   <?php echo '<script'; ?>
 type="text/javascript">
      jQuery(document).ready(function($) {
         $valuenya = $('#description1').val();
            if ($valuenya == 'Newspaper') {
               var Upline = $('input[name=upline]');
               $(Upline).attr('readonly', 'true');
               // console.log('News');
            }
        $('#description1').change(function(event) {
            $valuenya = $(this).val();
            // console.log($valuenya)
            if ($valuenya == 'Newspaper') {
               var Upline = $('input[name=upline]');
               var agen = $('input[name=agen]');
               $(Upline).attr('readonly', true);
               $(Upline).removeClass('hiddenInput');
               $(agen).addClass('hiddenInput');
               // console.log('News');
            }else{
               var Upline = $('input[name=upline]');
               var agen = $('input[name=agen]');
               $(Upline).addClass('hiddenInput');
               $(agen).removeClass('hiddenInput');
            }
        });


        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function generateCaptcha() {
            $('#captchaOperation').html([randomNumber(1, 9), '+', randomNumber(1, 9), '='].join(' '));
        }
        generateCaptcha();
        $('#registerForm').formValidation({
            framework: 'bootstrap',
            fields: {
                 nationality: {
                    message: 'this nationality is prohibited',
                    validators: {
                        notEmpty: {
                            message: 'Email can not be empty'
                        },
                        remote: {
                         url: 'check_nationality.php',
                         type: 'POST'
                        }
                    }
                },
                email: {
                    validators: {
                        emailAddress: {
                            message: 'Email is not correct'
                        }, notEmpty: {
                            message: 'Email can not be empty'
                        },remote: {
                         url: 'imp_check_email.php',
                         message: 'Email already registered',
                         type: 'POST'
                        }
                    }
                },
                upline: {
                    validators: {
                        notEmpty: {
                            message: 'Upline Cannot be empty'
                        },
                        remote: {
                         url: 'imp_check_agent.php?postmode=upline',
                         type: 'POST'
                        }
                    }
                },
                agen: {
                    validators: {
                      remote: {
                       url: 'imp_check_agent.php?postmode=agent',
                       type: 'POST'
                      }
                    }
                },
                Newspaper: {
                    validators: {
                      notEmpty: {
                            message: 'Upline Cannot be empty'
                        }
                    }
                },
                register_name: {
                    message: 'First Name is not correct',
                    validators: {
                        notEmpty: {
                            message: 'Please fill in the First name, because it can not be empty'
                        },
                        stringLength: {
                            min: 3,
                            max: 255,
                            message: 'First name need at least 3 character and max 255 characters'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z ]+$/,
                            message: 'Full name only can be filled using character'
                        },
                        different: {
                            field: 'password',
                            message: 'Full Name and Password can not be the same'
                        }
                    }
                }, password: {
                    validators: {
                        stringLength: {
                            min: 4,
                            max: 12,
                            message: 'Password need at least 4 Character. Combination Character with Number, and Max is 12 digit'
                        },
                        notEmpty: {
                            message: 'Password can not be blank'
                        }
                    }
                },
                acceptTerms: {
                    validators: {
                        notEmpty: {
                            message: 'Confirm Password need to be the same with Password, at least 4 Character. Combination Character with Number, and Max is 12 digit'
                        }
                    }
                },
                confirmPassword: {
                    validators: {
                        notEmpty: {
                            message: 'Confirm Password need to be the same with Password, at least 4 Character. Combination Character with Number, and Max is 12 digit'
                        },
                        identical: {
                            field: 'password',
                            message: 'Confirm Password is not equal with Password'
                        }
                    }
                }, captcha: {
                    validators: {
                        callback: {
                            message: 'Wrong answer',
                            callback: function (value, validator, $field) {
                            var items = $('#captchaOperation').html().split(' '),
                                sum   = parseInt(items[0]) + parseInt(items[2]);
                                    return value == sum;
                                }
                            }
                        }
                    },
                }
            });
    });
   <?php echo '</script'; ?>
>
</body>
<!-- Mirrored from hubancreative.com/projects/templates/coco/corporate/form-validation.html by HTTrack Website Copier/3.x [XR&CO'2013], Sun, 02 Nov 2014 15:13:01 GMT -->
<?php }
}
?>