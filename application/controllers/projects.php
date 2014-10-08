<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Projects extends CI_Controller {

    function __construct() {
        parent::__construct();        
        $this->load->helper("pagination");
        $this->load->model("ProjectReals_model");
    }

    public function index() {             
        $url = '/projects/listreals/';
        $total = count($this->ProjectReals_model->getAll());
        $pagination = pagination($url, $total, PER_PAGE, 4, 4);
        $data['pagination'] = $pagination->create_links();
        
        $offset = $this->uri->segment(4, 0);
        $data['bodycontent'] = "projects/index";                
        $data['listReals']     = $this->ProjectReals_model->getAll($offset, PER_PAGE);
        $this->load->view('layouts/index', $data);
    }

    public function detail($idStr) {
        $id = getIdFromStr($idStr);
        $data['news'] = $this->ProjectReals_model->getRealById($id);
        $data['other'] = $this->ProjectReals_model->getOtherReals($id);
        $data['bodycontent'] = "projects/detail";
        $this->load->view('layouts/index', $data);
    }
    
    public function bytags($id){
        $id = getIdFromStr($id);
        $data['bodycontent'] = "projects/index";                
        $data['listPros']   = $this->ProjectReals_model->getAllByTag($id, 0, 20);
        $data['type'] = 'tag';
        $this->load->view('layouts/index', $data);
        
    }

    public function listduan($strId) {        
        $url = "/".$this->uri->segment(1, 0);
        $total = count($this->ProjectReals_model->getAllByType($strId));      
        $pagination = pagination($url, $total, PER_PAGE, 2, 4);
        $data['pagination'] = $pagination->create_links();
        
        $offset = $this->uri->segment(2, 0);              
        $data['type'] = $strId;
        $data['bodycontent'] = "projects/index";                
        $data['listPros']     = $this->ProjectReals_model->getAllByType($strId, $offset, PER_PAGE);
        $this->load->view('layouts/index', $data);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */