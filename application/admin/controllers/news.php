<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class News extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("News_model");        
    }

    public function index() {       
        $data['listNews'] = $this->News_model->getAll();
        $data['bodycontent'] = 'news/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->News_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/news", "location");
            }
        }
        $data['bodycontent'] = 'news/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->News_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/news", "location");
            }
        }        
        $data['news'] = $this->News_model->getById($id);
        $data['bodycontent'] = 'news/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->News_model->delete($id)) {
            redirect(base_url() . "admin/index.php/news", "location");
        }
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */