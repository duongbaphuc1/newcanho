<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Reals extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->helper("pagination");
        $this->load->model("Reals_model");
        $this->load->model("District_model");
    }

    public function index() {
        $url = '/ky-gui/';
        $total = count($this->Reals_model->getAll());
        $pagination = pagination($url, $total, PER_PAGE, 4, 4);
        $data['pagination'] = $pagination->create_links();

        $offset = $this->uri->segment(4, 0);
        $data['bodycontent'] = "reals/index";
        $data['listReals'] = $this->Reals_model->getAll($offset, PER_PAGE);
        $this->load->view('layouts/index', $data);
    }

    function filter($cat_slug, $district = null){

        $total = count($this->Reals_model->getFilter($cat_slug, $district));
        if(!empty($district)){
            $url = "/" . $cat_slug."/".$district;
            $pagination = pagination($url, $total, PER_PAGE, 3, 4);
            $offset = $this->uri->segment(3, 0);
        }else {
            $url = "/" . $cat_slug;
            $pagination = pagination($url, $total, PER_PAGE, 2, 4);
            $offset = $this->uri->segment(2, 0);
        }

        $data['pagination'] = $pagination->create_links();

        $data['bodycontent'] = "reals/index";
        $data['listReals'] = $this->Reals_model->getFilter($cat_slug, $district, $offset, PER_PAGE, 'id');
        $this->load->view('layouts/index', $data);

    }

    function _getFilterCat($cat_slug){

        switch($cat_slug){
            case "": ; break;
        }
    }


    public function detail($idStr) {

        $id = getIdFromStr($idStr);
        $data['real'] = $this->Reals_model->getRealById($id);
        $data['bodycontent'] = "reals/detail";
        $data['other'] = $this->Reals_model->getOtherReals($id, $data['real']['project_id']);
        $data['max'] = $this->Reals_model->getMaxReal();
        $data['title'] = (!empty($data['real']['seo_title'])) ? $data['real']['seo_title'] : $data['real']['title'];
        $data['keyword'] = (!empty($data['real']['seo_keyword'])) ? $data['real']['seo_keyword'] : $data['real']['title'];
        $data['desc'] = (!empty($data['real']['seo_desc'])) ? $data['real']['seo_desc'] : $data['real']['title'];

        $this->load->view('layouts/index', $data);
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */