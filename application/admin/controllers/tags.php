<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Tags extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Tag_model");
    }

    public function index() {
        $data['listCats'] = $this->Tag_model->getAll();
        $data['bodycontent'] = 'tags/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Tag_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/tags", "location");
            }
        }
        $data['bodycontent'] = 'tags/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Tag_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/tags", "location");
            }
        }
        $data['cat'] = $this->Tag_model->getById($id);
        $data['bodycontent'] = 'tags/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Tag_model->delete($id)) {
            redirect(base_url() . "admin/index.php/tags", "location");
        }
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */