<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Quans extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Quans_model");
    }

    public function index() {
        if(ispost()){
            $this->Quans_model->saveSort($_POST);
        }
        $data['listCats'] = $this->Quans_model->getAll();
        $data['bodycontent'] = 'quans/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Quans_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/quans", "location");
            }
        }
        $data['province'] = $this->Quans_model->getCatForSelectBox('province','province_name');
        $data['bodycontent'] = 'quans/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Quans_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/quans", "location");
            }
        }
        $data['province'] = $this->Quans_model->getCatForSelectBox('province','province_name');
        $data['quans'] = $this->Quans_model->getById($id);
        $data['bodycontent'] = 'quans/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Quans_model->delete($id)) {
            redirect(base_url() . "admin/index.php/quans", "location");
        }
    }
    
    public function active($id) {
       if ($this->Quans_model->active($id)) {
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }
    
    public function unactive($id) {
       if ($this->Quans_model->unactive($id)) {            
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */