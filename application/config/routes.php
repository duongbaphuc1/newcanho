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

// end new
$route['gioi-thieu']           = "staticcontent/index/ABOUT_US";
$route['tuyen-dung']           = "staticcontent/index/CAREERS";

$route['du-an-can-ho']         = "projects/listduan/canho";
$route['du-an-can-ho/(:any)']  = "projects/listduan/canho/$1";
$route['du-an-dat-nen']        = "projects/listduan/datnen";
$route['du-an-dat-nen/(:any)'] = "projects/listduan/datnen/$1";
$route['duan/chitiet/(:any)']  = "projects/detail/$1";
$route['du-an/(:any)']         = "projects/bytags/$1";
$route['ky-gui']               = "reals/index";
//$route['ky-gui/(:any)']        = "reals/index/$1";
$route['ky-gui/chitiet/(:any)']= "reals/detail/$1";
$route['dang-ky-gui']          = "reals/formkygui";
$route['lien-he']              = "contacts";
$route['tim-kiem']             = "timkiem/index";

// tin tuc
$route['tin-tuc'] = "news";
$route['tin-tuc/chitiet/(:any)'] = "news/detail/$1";
$route['tin-tuc/(:any)'] = "news/$1";
//real
$route['tin-bat-dong-san/chi-tiet/(:any)'] = "reals/detail/$1";
$route['tin-bat-dong-san'] = "reals/index";
$route['tin-bat-dong-san/(:any)'] = "reals/index/$1";

$route['404_override'] = '';

/* End of file routes.php */
/* Location: ./application/config/routes.php */