<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Areas extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Areas_model");
    }

    public function index() {       
        if(ispost()){
            $this->Areas_model->saveSort($_POST);
        }
        $data['listArea'] = $this->Areas_model->getAll();
        $data['bodycontent'] = 'areas/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Areas_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/areas", "location");
            }
        }
        $data['listArea'] = $this->Areas_model->getAll(); 
        $data['bodycontent'] = 'areas/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Areas_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/areas", "location");
            }
        }   
        $data['listArea'] = $this->Areas_model->getById($id);       
        $data['bodycontent'] = 'areas/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Areas_model->delete($id)) {
            redirect(base_url() . "admin/index.php/areas", "location");
        }
    }
    
    public function active($id) {
       if ($this->Areas_model->active($id)) {
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }
    
    public function unactive($id) {
       if ($this->Areas_model->unactive($id)) {            
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/areas.php */