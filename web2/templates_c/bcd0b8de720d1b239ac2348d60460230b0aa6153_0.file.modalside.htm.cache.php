<?php /* Smarty version 3.1.27, created on 2016-09-15 06:11:18
         compiled from "/var/www/cabinet-stable/web2/templates/modalside.htm" */ ?>
<?php
/*%%SmartyHeaderCode:189585749957d9d9160dc210_40730380%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'bcd0b8de720d1b239ac2348d60460230b0aa6153' => 
    array (
      0 => '/var/www/cabinet-stable/web2/templates/modalside.htm',
      1 => 1473887587,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '189585749957d9d9160dc210_40730380',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_57d9d9160e1ed6_03367173',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_57d9d9160e1ed6_03367173')) {
function content_57d9d9160e1ed6_03367173 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '189585749957d9d9160dc210_40730380';
?>

<!-- Modal Start -->
<!-- Modal Task Progress -->
<div class="md-modal md-3d-flip-vertical" id="task-progress">
	<div class="md-content">
		<h3>
			<strong>Task Progress</strong> Information
		</h3>
		<div>
			<p>CLEANING BUGS</p>
			<div class="progress progress-xs for-modal">
				<div class="progress-bar progress-bar-success" role="progressbar"
					aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
					style="width: 80%">
					<span class="sr-only">80&#37; Complete</span>
				</div>
			</div>
			<p>POSTING SOME STUFF</p>
			<div class="progress progress-xs for-modal">
				<div class="progress-bar progress-bar-warning" role="progressbar"
					aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
					style="width: 65%">
					<span class="sr-only">65&#37; Complete</span>
				</div>
			</div>
			<p>BACKUP DATA FROM SERVER</p>
			<div class="progress progress-xs for-modal">
				<div class="progress-bar progress-bar-info" role="progressbar"
					aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
					style="width: 95%">
					<span class="sr-only">95&#37; Complete</span>
				</div>
			</div>
			<p>RE-DESIGNING WEB APPLICATION</p>
			<div class="progress progress-xs for-modal">
				<div class="progress-bar progress-bar-primary" role="progressbar"
					aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
					style="width: 100%">
					<span class="sr-only">100&#37; Complete</span>
				</div>
			</div>
			<p class="text-center">
				<button class="btn btn-danger btn-sm md-close">Close</button>
			</p>
		</div>
	</div>
</div>

<!-- Modal Logout -->
<div class="md-modal md-just-me" id="logout-modal">
	<div class="md-content">
		<h3>
			<strong>Logout</strong> Confirmation
		</h3>
		<div>
			<p class="text-center">Do you really want to Log Out ?</p>
			<p class="text-center">
				<button class="btn btn-danger md-close">No!</button>
				<a href="logout.php" class="btn btn-success md-close">Yes, I am sure</a>
			</p>
		</div>
	</div>
</div>
<!-- Modal End -->
<?php }
}
?>