<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class News extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->helper("pagination");
        $this->load->model("News_model");
    }

    public function index() {
        $url = '/tin-tuc/listnews/';
        $total = count($this->News_model->getAll());
        $pagination = pagination($url, $total, PER_PAGE, 4, 4);
        $data['pagination'] = $pagination->create_links();

        $offset = $this->uri->segment(4, 0);
        $data['bodycontent'] = "news/index";
        $data['listNew'] = $this->News_model->getAll($offset, PER_PAGE, 'created_date');
        $this->load->view('layouts/index', $data);
    }

    public function detail($idStr) {
        $id = getIdFromStr($idStr);
        $data['news'] = $this->News_model->getNewsById($id);
        $data['other'] = $this->News_model->getOtherReals($id);
        $data['bodycontent'] = "news/detail";
        $this->load->view('layouts/index', $data);
    }

    public function listnews() {
        $url = '/tin-tuc/listnews/';
        $total = count($this->News_model->getAll());
        $pagination = pagination($url, $total, PER_PAGE, 3, 4);
        $data['pagination'] = $pagination->create_links();

        $offset = $this->uri->rsegment(3, 0);
        $data['bodycontent'] = "news/index";
        $data['listNew'] = $this->News_model->getAll($offset, PER_PAGE, 'created_date');
        $this->load->view('layouts/index', $data);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */