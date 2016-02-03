<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Realestate extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model(array("Realestate_model", "Tag_model", "Tagreal_model", "Projects_model"));
        $this->load->helper(array("url"));
        $this->load->library("pagination");
    }

    public function index() {
        $realestate = $this->Realestate_model->getAll();
        $config['base_url'] = base_url() . "admin/index.php/realestate/index";
        $config['per_page'] = 20;
        $config['uri_segment'] = 3;
        $config['total_rows'] = count($realestate);

        $this->pagination->initialize($config);
        $page = $this->uri->segment(3);

        $data['listRealestate'] = array_slice($realestate, $page, $config['per_page']);
        $data['bodycontent'] = 'realestate/index';
        $this->load->view("layouts/index", $data);
    }

    public function search($keyword) {        
        $realestate = array();
        if (!empty($keyword)) {
            $keyword = urldecode($keyword);
            $config['base_url'] = base_url() . "admin/index.php/realestate/search/".$keyword."/";
            $config['per_page'] = PER_PAGE;
            $config['uri_segment'] = 4;
            $config['total_rows'] = $this->Realestate_model->getTotal($keyword);
            $this->pagination->initialize($config);
            $offset =$this->uri->segment(4);
            
            $realestate = $this->Realestate_model->getAllByLike('real_estate', 'title', $keyword, $config['per_page'], $offset);
            $data['keyword'] = $keyword;
        }
        $data['listRealestate'] = $realestate;
        $data['bodycontent'] = 'realestate/index';
        $this->load->view("layouts/index", $data);
    }
    
    public function active($id) {
       if ($this->Realestate_model->active($id)) {
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }
    
    public function unactive($id) {
       if ($this->Realestate_model->unactive($id)) {
            //redirect(base_url() . "admin/index.php/tags", "location");
            redirect($_SERVER['HTTP_REFERER']);
        } 
    }

    public function add() {
        if (ispost()) {
            if ($this->Realestate_model->add($_POST)) {
                redirect(base_url() . "admin/index.php/realestate", "location");
            }
        }
        $data['categories'] = $this->Realestate_model->getCatForSelectBox('categories', 'category_name');
        $data['cat_project'] = $this->Realestate_model->getCatForSelectBox('cat_project', 'cat_name');
        $data['price'] = $this->Realestate_model->getCatForSelectBox('price', 'price_range');
        $data['area'] = $this->Realestate_model->getCatForSelectBox('area', 'area_range');
        $data['tags'] = $this->Tag_model->getAllForSelectBox();
        $lists = array("" => "--Select--");
        $list = $this->Realestate_model->getAllById('district', 'province_id', 1);
        foreach ($list as $ls) {
            $lists[$ls['id']] = $ls['district_name'];
        }
        $data['district'] = $lists;

        $data['bodycontent'] = 'realestate/add';
        $this->load->view("layouts/index", $data);
    }

    public function edit($id) {

        if (ispost()) {
            if ($this->Realestate_model->edit($_POST, $id)) {
                redirect(base_url() . "admin/index.php/realestate", "location");
            }
        }
        $data['categories'] = $this->Realestate_model->getCatForSelectBox('categories', 'category_name');
        $data['price'] = $this->Realestate_model->getCatForSelectBox('price', 'price_range');
        $data['area'] = $this->Realestate_model->getCatForSelectBox('area', 'area_range');
        $data['tags'] = $this->Tag_model->getAllForSelectBox();
        $lists = array("" => "--Select--");
        $list = $this->Realestate_model->getAllById('district', 'province_id', 1);
        foreach ($list as $ls) {
            $lists[$ls['id']] = $ls['district_name'];
        }
        $data['district'] = $lists;
        $tagsListEdit = $this->Tagreal_model->getAllById('real_id', $id);
        $tagsEdit = array();
        if (count($tagsListEdit) > 0) {
            foreach ($tagsListEdit as $list) {
                array_push($tagsEdit, $list['tag_id']);
            }
        }
        $data['tagsEdit'] = $tagsEdit;
        $realestate = $this->Realestate_model->getById($id);
        $data['realestate'] = $realestate;
        $project_name = $this->Projects_model->getById($realestate['project_id']);
        if (count($project_name) > 0) {
            $data['project_name'] = $project_name['project_name'];
        }
        $data['bodycontent'] = 'realestate/edit';
        $this->load->view("layouts/index", $data);
    }

    public function delete($id) {
        if ($this->Realestate_model->delete($id)) {
            if ($this->Tagreal_model->delete('real_id', $id)) {
                redirect(base_url() . "admin/index.php/realestate", "location");
            }
        }
    }

    public function getReal() {
        Header('Accept-Charset	ISO-8859-1,utf-8;q=0.7,*;q=0.7');
        $term = $_GET['term'];
        $results = $this->Realestate_model->getAllForSearch($term);
        echo json_encode($results);
    }

    public function getPro() {
        Header('Accept-Charset	ISO-8859-1,utf-8;q=0.7,*;q=0.7');
        $term = $_GET['term'];
        $results = $this->Realestate_model->getAllForJson($term);
        echo json_encode($results);
    }

    function jsonRemoveUnicodeSequences($struct) {
        return preg_replace("/\\\\u([a-f0-9]{4})/e", "iconv('UCS-4LE','UTF-8',pack('V', hexdec('U$1')))", json_encode($struct));
    }

}

/* End of file realestate.php *
/* Location: ./application/controllers/realestate.php */
