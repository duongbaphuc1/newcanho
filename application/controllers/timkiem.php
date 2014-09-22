<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Timkiem extends CI_Controller {

    function __construct() {
        parent::__construct(); 
        $this->load->helper("pagination");
        $this->load->model("Reals_model");
        $this->load->model("ProjectReals_model");
        $this->load->model("News_model");
    }

    public function index() {
        $keyword = $_GET['tukhoa'];
        $data['bodycontent'] = "timkiem/index";    
        $data['project']   = $this->ProjectReals_model->timKiem($keyword);
        $data['kygui']     = $this->Reals_model->timKiem($keyword); 
        $data['listNew']      = $this->News_model->timKiem($keyword); 
        $data['keyword'] = $keyword;
        $this->load->view('layouts/index', $data);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */