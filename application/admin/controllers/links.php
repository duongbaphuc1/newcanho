<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Links extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Links_model");
    }

    public function index() {
        $data['listCats'] = $this->Links_model->getAll();
        $data['bodycontent'] = 'links/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Links_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/links", "location");
            }
        }
        $data['bodycontent'] = 'links/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Links_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/links", "location");
            }
        }
        $data['cat'] = $this->Links_model->getById($id);
        $data['bodycontent'] = 'links/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Links_model->delete($id)) {
            redirect(base_url() . "admin/index.php/links", "location");
        }
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */