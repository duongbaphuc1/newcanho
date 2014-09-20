<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Supports extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Supports_model");        
    }

    public function index() {
        $data['listUsers'] = $this->Supports_model->getAll();
        $data['bodycontent'] = 'supports/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            $add = $this->Supports_model->add($_POST);
            if ($add && empty($add['error'])) {
                redirect(base_url() . "admin/index.php/supports", "location");
            } else {
                $data['error'] = $add;
                $data['info'] = $_POST;
            }
        }
        $data['bodycontent'] = 'supports/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        $data['user'] = $this->Supports_model->getById($id);
        if (ispost()) {           
            $edit = $this->Supports_model->edit($_POST, $id);
            if ($edit && empty($edit['error'])) {
                redirect(base_url() . "admin/index.php/supports", "location");
            } else {
                $data['error'] = $edit;
                $data['user'] = $_POST;
            }
        }
        $data['bodycontent'] = 'supports/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Supports_model->delete($id)) {
            redirect(base_url() . "admin/index.php/supports", "location");
        }
    }        

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */