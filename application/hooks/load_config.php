<?php
function load_config()
{
	$CI =& get_instance();
	foreach ($CI->M_appconfig->get_all()->result() as $app_config) {
		// var_dump($app_config);
		# code...
		$CI->config->set_item($app_config->key, $app_config->value);
	}
		// var_dump($CI->config);
}
