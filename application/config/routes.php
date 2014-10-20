<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	http://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There area two reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router what URI segments to use if those provided
| in the URL cannot be matched to a valid route.
|
*/
$route['default_controller']  = "home";
$route['scaffolding_trigger'] = "scaffolding";

// new
$route['^([^/]*-[0-9]+i)$']   = "reals/detail/$1";

// list reals
$route['cho-thue-nha']           = "reals/filter/cho-thue-nha";
$route['cho-thue-nha/([0-9]+)$'] = "reals/filter/cho-thue-nha";
$route['cho-thue-nha/(:any)']    = "reals/filter/cho-thue-nha/$1";

$route['van-phong-cho-thue']           = "reals/filter/van-phong-cho-thue";
$route['van-phong-cho-thue/([0-9]+)$'] = "reals/filter/van-phong-cho-thue";
$route['van-phong-cho-thue/(:any)']    = "reals/filter/van-phong-cho-thue/$1";

$route['can-ho-cho-thue']           = "reals/filter/can-ho-cho-thue";
$route['can-ho-cho-thue/([0-9]+)$'] = "reals/filter/can-ho-cho-thue";
$route['can-ho-cho-thue/(:any)']    = "reals/filter/can-ho-cho-thue/$1";

$route['villa-cho-thue']           = "reals/filter/villa-cho-thue";
$route['villa-cho-thue/([0-9]+)$'] = "reals/filter/villa-cho-thue";
$route['villa-cho-thue/(:any)']    = "reals/filter/villa-cho-thue/$1";

$route['can-ho-dich-vu']           = "reals/filter/can-ho-dich-vu";
$route['can-ho-dich-vu/([0-9]+)$'] = "reals/filter/can-ho-dich-vu";
$route['can-ho-dich-vu/(:any)']    = "reals/filter/can-ho-dich-vu/$1";

$route['cho-thue-can-ho-(:any)']   = "reals/filterPro/$1";
$route['cho-thue-can-ho-(:any)/([0-9]+)$'] = "reals/filterPro/$";

$route['cho-thue-van-phong-(:any)']   = "reals/filterPro/$1";
$route['cho-thue-van-phong-(:any)/([0-9]+)$'] = "reals/filterPro/$";


$route['tim-kiem'] = 'timkiem';
$route['tim-kiem/(:any)'] = 'timkiem/index/$1';
$route['lien-he'] = 'contacts';

$route['404_override'] = '';

/* End of file routes.php */
/* Location: ./application/config/routes.php */