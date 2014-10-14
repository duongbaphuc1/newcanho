<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Realtype extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Realtype_model");        
    }

    public function index() {
        $data['listCats'] = $this->Realtype_model->getAll();              
        $data['bodycontent'] = 'realtype/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Realtype_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/realtype", "location");
            }
        }
        $data['listCatsType'] = $this->Realtype_model->getCatForSelectBox('category_type','type_name');
        $data['bodycontent'] = 'realtype/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Realtype_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/realtype", "location");
            }
        }
        $data['cat'] = $this->Realtype_model->getById($id);
        $data['bodycontent'] = 'realtype/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Realtype_model->delete($id)) {
            redirect(base_url() . "admin/index.php/realtype", "location");
        }
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */