<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Quans extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Quans_model");
    }

    public function index() {
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
        $data['bodycontent'] = 'quans/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Quans_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/quans", "location");
            }
        }
        $data['cat'] = $this->Quans_model->getById($id);
        $data['bodycontent'] = 'quans/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Quans_model->delete($id)) {
            redirect(base_url() . "admin/index.php/quans", "location");
        }
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */