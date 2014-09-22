<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
if ( ! function_exists('pagination'))
{
    function pagination($url, $total, $perPage, $uriSeg, $numLink){
        $CI = & get_instance();
        $CI->load->library('pagination');
        $config['base_url'] = $url;
        $config['total_rows'] = $total;
        $config['per_page'] = $perPage;
        $config['uri_segment'] = $uriSeg;
        $config['num_links'] = $numLink;     
        $config['full_tag_open'] = '<div class="pages mt_10px" align="center"><strong>';
        $config['full_tag_close'] = '</strong></div>';
        $config['num_tag_open'] = "";
        $config['num_tag_close'] = "";
        $config['cur_tag_open'] = "<a href='#' id='cur'>";
        $config['cur_tag_close'] = "</a>";
        $config['first_tag_open'] = "";
        $config['first_tag_close'] = "";
        $config['last_tag_open'] = "";
        $config['last_tag_close'] = "";
        $config['next_tag_open'] = "";
        $config['next_tag_close'] = "";
        $config['prev_tag_open'] = "";
        $config['prev_tag_close'] = "";        
        
        $CI->pagination->initialize($config);
        return $CI->pagination;
    }
}
