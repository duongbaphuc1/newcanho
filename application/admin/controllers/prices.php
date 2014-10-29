<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Prices extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Prices_model");
    }

    public function index() {       
        if(ispost()){
            $this->Prices_model->saveSort($_POST);
        }
        $data['listPrice'] = $this->Prices_model->getAll();
        $data['bodycontent'] = 'prices/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Prices_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/prices", "location");
            }
        }
        $data['listPrice'] = $this->Prices_model->getAll(); 
        $data['bodycontent'] = 'prices/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Prices_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/prices", "location");
            }
        }   
        $data['listPrice'] = $this->Prices_model->getById($id);       
        $data['bodycontent'] = 'prices/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Prices_model->delete($id)) {
            redirect(base_url() . "admin/index.php/prices", "location");
        }
    }
    
    public function active($id) {
       if ($this->Prices_model->active($id)) {
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }
    
    public function unactive($id) {
       if ($this->Prices_model->unactive($id)) {
            //redirect(base_url() . "admin/index.php/tags", "location");
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/prices.php */