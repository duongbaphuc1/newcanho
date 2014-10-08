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
        $data['bodycontent'] = "home/real_home";
        $data['listRealHome'] = $this->Reals_model->getAll(0, 20);
        $this->load->view('layouts/index', $data);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */