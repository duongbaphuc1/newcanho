<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Realestate extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Realestate_model");
        $this->load->model("Tag_model");
        //$this->load->helper("pagination");
        $this->load->library("pagination");
    }

    public function index() {       
        /*$url = '/admin/index.php/realestate/index/';
        $total = count($this->Realestate_model->getAll());        
        $pagination = pagination($url, $total, PER_PAGE, 4, 4);
        $data['pagination'] = $pagination->create_links();
        $offset = $this->uri->segment(4, 0);
        $data['listRealestate'] = $this->Realestate_model->getAll($offset, PER_PAGE, 'id');*/
        $config['base_url'] = '/admin/index.php/realestate/index/';
        $config['total_rows'] = count($this->Realestate_model->getAll());
        $config['per_page'] = 10;
        $config['uri_segment'] = 5;
        $config['page_query_string'] = FALSE;        
        $this->pagination->initialize($config);
        
        $page=$this->uri->segment(5);
        $temp=$this->Realestate_model->getAll();
        $result=array_slice($temp, $page,$config['per_page']);
        $data['listRealestate']=$result;
        $data['bodycontent'] = 'realestate/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
                
        if (ispost()) {
            if ($this->Realestate_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/realestate", "location");
            }
        }        
        $data['categories']=$this->Realestate_model->getCatForSelectBox('categories','category_name');
        $data['cat_project']=$this->Realestate_model->getCatForSelectBox('cat_project','cat_name');
        $data['price']=$this->Realestate_model->getCatForSelectBox('price','price_range');
        $data['area']=$this->Realestate_model->getCatForSelectBox('area','area_range');
        $data['tags'] = $this->Tag_model->getAllForSelectBox();
        $lists = array(""=>"--Select--");
        $list = $this->Realestate_model->getAllById('district','province_id',1);
        foreach ($list as $ls){
            $lists[$ls['id']] = $ls['district_name'];
        }        
        $data['district']=$lists;
        
        $data['bodycontent'] = 'realestate/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->News_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/realestate", "location");
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