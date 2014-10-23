<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Tags extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model("Tag_model");
        $this->load->helper(array("url"));
        $this->load->library("pagination");
    }

    public function index() {
        if(ispost()){
            $this->Tag_model->saveSort($_POST);
        }
        $config['base_url'] = base_url() . "admin/index.php/tags/index/";
        $config['per_page'] = PER_PAGE;
        $config['uri_segment'] = 3;
        $config['total_rows'] = $this->Tag_model->getTotal();
        $this->pagination->initialize($config);
        $offset =$this->uri->segment(3);
        
        $data['listCats'] = $this->Tag_model->getAllForPaging('tag',$config['per_page'], $offset);
        $data['bodycontent'] = 'tags/index';
        $this->load->view("layouts/index", $data);
    }
    
    public function search($keyword) {        
        $tags = array();
        if (!empty($keyword)) {
            $keyword = urldecode($keyword);
            $config['base_url'] = base_url() . "admin/index.php/tags/search/".$keyword."/";
            $config['per_page'] = PER_PAGE;
            $config['uri_segment'] = 4;
            $config['total_rows'] = $this->Tag_model->getTotalSearch($keyword);
            $this->pagination->initialize($config);
            $offset =$this->uri->segment(4);
            
            $tags = $this->Tag_model->getAllByLike('tag', 'tag_name', $keyword, $config['per_page'], $offset);
            $data['keyword'] = $keyword;
        }
        $data['listCats'] = $tags;
        $data['bodycontent'] = 'tags/index';
        $this->load->view("layouts/index", $data);
    }

    public function add() {
        if (ispost()) {
            if ($this->Tag_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/tags", "location");
            }
        }
        $data['cattag_id'] = $this->Tag_model->getCatForSelectBox('cat_tag', 'cattag_name');
        $data['bodycontent'] = 'tags/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {
        if (ispost()) {
            if ($this->Tag_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/tags", "location");
            }
        }
        $data['cattag_id'] = $this->Tag_model->getCatForSelectBox('cat_tag', 'cattag_name');
        $data['tags'] = $this->Tag_model->getById($id);
        $data['bodycontent'] = 'tags/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Tag_model->delete($id)) {
            redirect(base_url() . "admin/index.php/tags", "location");
        }
    }
    
    public function active($id) {
       if ($this->Tag_model->active($id)) {
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }
    
    public function unactive($id) {
       if ($this->Tag_model->unactive($id)) {
            //redirect(base_url() . "admin/index.php/tags", "location");
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }

}

/* End of file Tags.php */
/* Location: ./application/controllers/Tags.php */