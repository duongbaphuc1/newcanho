<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Advs extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Advs_model");
    }

    public function index() {
        $data['listCats'] = $this->Advs_model->getAll();
        $data['bodycontent'] = 'adv/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Advs_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/advs", "location");
            }
        }
        $data['bodycontent'] = 'adv/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Advs_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/advs", "location");
            }
        }
        $data['adv'] = $this->Advs_model->getById($id);
        $data['bodycontent'] = 'adv/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Advs_model->delete($id)) {
            redirect(base_url() . "admin/index.php/advs", "location");
        }
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */