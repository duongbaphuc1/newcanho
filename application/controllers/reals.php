<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Reals extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->helper("pagination");
        $this->load->model("Reals_model");
        $this->load->model("District_model");
    }

    public function index() {
        $url = '/ky-gui/';
        $total = count($this->Reals_model->getAll());
        $pagination = pagination($url, $total, PER_PAGE, 4, 4);
        $data['pagination'] = $pagination->create_links();

        $offset = $this->uri->segment(4, 0);
        $data['bodycontent'] = "reals/index";
        $data['listReals'] = $this->Reals_model->getAll($offset, PER_PAGE);
        $this->load->view('layouts/index', $data);
    }

    public function detail($idStr) {
        $id = getIdFromStr($idStr);
        $data['real'] = $this->Reals_model->getRealById($id);
        $data['bodycontent'] = "reals/detail";
        $data['other'] = $this->Reals_model->getOtherReals($id);
        $this->load->view('layouts/index', $data);
    }

    public function formKyGui() {
        $data['success'] = false;
        if (ispost()) {
            $data = $_POST;
            if ($this->Reals_model->addReals($data)) {
                $data['success'] = true;
            }
        }
        $data['district'] = $this->District_model->getDistrict();
        $data['bodycontent'] = "reals/form";
        $this->load->view('layouts/index', $data);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */