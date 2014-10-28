<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Tag_clouds extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Tag_clouds_model");
    }

    public function index() {       
        $data['tag_clouds'] = $this->Tag_clouds_model->getAll();        
        $data['bodycontent'] = 'tag_clouds/index';
        $this->load->view("layouts/index", $data);
    }
    
    public function add() {
        if (ispost()) {
            if ($this->Tag_clouds_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/tag_clouds", "location");
            }
        }
        $data['tag_clouds'] = $this->Tag_clouds_model->getAll(); 
        $data['bodycontent'] = 'tag_clouds/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Tag_clouds_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/tag_clouds", "location");
            }
        }   
        $data['tag_clouds'] = $this->Tag_clouds_model->getById($id);              
        $data['bodycontent'] = 'tag_clouds/edit';
        $this->load->view("layouts/index", $data);
    }
    
    public function delete($id) {
        if ($this->Tag_clouds_model->delete($id)) {
            redirect(base_url() . "admin/index.php/tag_clouds", "location");
        }
    }
    
    public function active($id) {
       if ($this->Tag_clouds_model->active($id)) {
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }
    
    public function unactive($id) {
       if ($this->Tag_clouds_model->unactive($id)) {
            //redirect(base_url() . "admin/index.php/tags", "location");
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }

    
}

/* End of file welcome.php */
/* Location: ./application/controllers/tag_clouds.php */