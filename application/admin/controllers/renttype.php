<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Renttype extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Renttype_model");
        $this->Renttype_model->setTable('rent_type');
    }

    public function index() {
        $data['listCats'] = $this->Renttype_model->getAll();
        $data['bodycontent'] = 'renttype/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Renttype_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/renttype", "location");
            }
        }
        $data['bodycontent'] = 'renttype/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Renttype_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/renttype", "location");
            }
        }
        $data['cat'] = $this->Renttype_model->getById($id);
        $data['bodycontent'] = 'renttype/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Renttype_model->delete($id)) {
            redirect(base_url() . "admin/index.php/renttype", "location");
        }
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */