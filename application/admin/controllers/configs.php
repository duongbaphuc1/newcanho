<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Configs extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Configs_model");
    }

    public function index() {       
        $data['configs'] = $this->Configs_model->getAll();        
        $data['bodycontent'] = 'configs/index';
        $this->load->view("layouts/index", $data);
    }

    

    public function edit($id) {
        if (ispost()) {
            if ($this->Configs_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/configs", "location");
            }
        }   
        $data['configs'] = $this->Configs_model->getById($id);              
        $data['bodycontent'] = 'configs/edit';
        $this->load->view("layouts/index", $data);
    }

    
}

/* End of file welcome.php */
/* Location: ./application/controllers/configs.php */