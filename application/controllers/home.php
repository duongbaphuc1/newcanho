<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Home extends CI_Controller {

    function __construct() {
        parent::__construct(); 
        $this->load->helper("pagination");
        $this->load->model("Reals_model");
        $this->load->model("Common_model");
        $this->output->cache(5);
    }

    public function index() {

        $data = $this->Common_model->getDefault();

        $data['bodycontent'] = "home/real_home";
        $list = $this->Reals_model->getAll(0, 24, 'id');
        $data['listRealHome'] = array_slice($list, 3, -1);
        $data['listNewHome'] = array_slice($list, 19, -1, true);

        $this->load->view('layouts/index', $data);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */