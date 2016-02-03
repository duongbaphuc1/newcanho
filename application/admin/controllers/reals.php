<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Reals extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Realestates_model");
        $this->load->model("District_model");  
    }

    public function index() {       
        $data['listNews'] = $this->Realestates_model->getAll();
        $data['bodycontent'] = 'reals/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Realestates_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/reals", "location");
            }
        }
        $data['bodycontent'] = 'reals/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Realestates_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/reals", "location");
            }
        }        
        $data['district'] = $this->District_model->getDistrict();
        $data['real'] = $this->Realestates_model->getById($id);        
        $data['bodycontent'] = 'reals/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Realestates_model->delete($id)) {
            redirect(base_url() . "admin/index.php/reals", "location");
        }
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */