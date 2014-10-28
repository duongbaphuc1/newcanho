<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Advs extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Advs_model");
    }

    public function index() {
        if(ispost()){
            $this->Advs_model->saveSort($_POST);
        }
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
        $data['cat_id'] = $this->Advs_model->getCatForSelectBox('cat_advs','catadv_name');
        $data['bodycontent'] = 'adv/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Advs_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/advs", "location");
            }
        }
        $data['cat_id'] = $this->Advs_model->getCatForSelectBox('cat_advs','catadv_name');
        $data['adv'] = $this->Advs_model->getById($id);
        $data['bodycontent'] = 'adv/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Advs_model->delete($id)) {
            redirect(base_url() . "admin/index.php/advs", "location");
        }
    }
    
    public function active($id) {
       if ($this->Advs_model->active($id)) {
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }
    
    public function unactive($id) {
       if ($this->Advs_model->unactive($id)) {
            //redirect(base_url() . "admin/index.php/tags", "location");
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */