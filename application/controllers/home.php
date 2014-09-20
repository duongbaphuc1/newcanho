<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Home extends CI_Controller {

    function __construct() {
        parent::__construct(); 
        $this->load->helper("pagination");
        $this->load->model("Reals_model");
        $this->load->model("ProjectReals_model");
        $this->load->model('News_model');
    }

    public function index() {
        $data['listLastNews'] = $this->News_model->getAll(0,12, 'created_date');
        $data['bodycontent'] = "home/real_home";    
        $data['listCanho']   = $this->ProjectReals_model->getAllByType("canho",0, ITEM_PRODUCT_HOME);
        $data['listDatnen']  = $this->ProjectReals_model->getAllByType("datnen",0, ITEM_PRODUCT_HOME);   
        $data['listReals']  = $this->Reals_model->getAll(0, PER_PAGE);   
        $this->load->view('layouts/index', $data);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */