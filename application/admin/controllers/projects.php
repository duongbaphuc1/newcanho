<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Projects extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Projects_model");        
        $this->load->model("District_model"); 
        $this->load->model("Tag_model"); 
    }

    public function index() {       
        $data['listNews'] = $this->Projects_model->getAll();
        $data['bodycontent'] = 'projects/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Projects_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/projects", "location");
            }
        }
        $data['district'] = $this->District_model->getDistrict();        
        $data['tags'] = $this->Tag_model->getAllForSelectBox();
        $data['bodycontent'] = 'projects/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Projects_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/projects", "location");
            }
        }        
        $data['tags'] = $this->Tag_model->getAllForSelectBox();
        $data['district'] = $this->District_model->getDistrict();
        $data['news'] = $this->Projects_model->getById($id);
        $data['bodycontent'] = 'projects/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Projects_model->delete($id)) {
            redirect(base_url() . "admin/index.php/projects", "location");
        }
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */