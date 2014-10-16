<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Timkiem extends CI_Controller {

    function __construct() {
        parent::__construct(); 
        $this->load->helper("pagination");
        $this->load->model("Reals_model");
        $this->load->model("Common_model");
    }

    public function index() {

        $data = $this->Common_model->getDefault();
        if(ispost()){
            $url = "/tim-kiem/";
            $data['results'] = $this->Reals_model->timKiem($_POST, PER_PAGE, 0);
            $total           = $this->Reals_model->getTotalResult($_POST);
            $data['params']  = $_POST;
            $pagination = pagination($url, $total, PER_PAGE, 2, 4);
            $data['pagination'] = $pagination->create_links();
        }

        $data['bodycontent'] = "timkiem/index";

        $this->load->view('layouts/index', $data);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */