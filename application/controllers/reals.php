<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Reals extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->helper("pagination");
        $this->load->model("Reals_model");
        $this->load->model("District_model");
        $this->load->model("Project_model");
        $this->load->model("Common_model");
    }

    function filter($cat_slug, $district = null){

        $data = $this->Common_model->getDefault();

        $total = count($this->Reals_model->getFilter($cat_slug, $district));
        if(!empty($district)){
            $url = "/" . $cat_slug."/".$district;
            $pagination = pagination($url, $total, PER_PAGE, 3, 4);
            $offset = $this->uri->segment(3, 0);
        }else {
            $url = "/" . $cat_slug;
            $pagination = pagination($url, $total, PER_PAGE, 2, 4);
            $offset = $this->uri->segment(2, 0);
        }

        $data['district'] = $district;
        $data['pagination'] = $pagination->create_links();

        $data['bodycontent'] = "reals/index";
        $data['listReals'] = $this->Reals_model->getFilter($cat_slug, $district, $offset, PER_PAGE, 'id');

        if(!empty($district)){
            $titleTmp = $data['listReals'][0]['category_name'];
            $data['title'] = (!empty($data['listReals'][0]['cat_title'])) ? $data['listReals'][0]['cat_title'] : $titleTmp;
            $data['keyword'] = (!empty($data['listReals'][0]['cat_keyword'])) ? $data['listReals'][0]['cat_keyword'] : $titleTmp;
            $data['desc'] = (!empty($data['listReals'][0]['cat_desc'])) ? $data['listReals'][0]['cat_desc'] : $titleTmp;

            $data['title'] = $data['title']. " ". $data['listReals'][0]['district_name'];
            $data['keyword'] = $data['keyword']. " ". $data['listReals'][0]['district_name'];
            $data['desc'] = $data['desc']. " ". $data['listReals'][0]['district_name'];

        }else{
            $titleTmp = $data['listReals'][0]['category_name'];

            $data['title'] = (!empty($data['listReals'][0]['cat_title'])) ? $data['listReals'][0]['cat_title'] : $titleTmp;
            $data['keyword'] = (!empty($data['listReals'][0]['cat_keyword'])) ? $data['listReals'][0]['cat_keyword'] : $titleTmp;
            $data['desc'] = (!empty($data['listReals'][0]['cat_desc'])) ? $data['listReals'][0]['cat_desc'] : $titleTmp;
        }

        $this->load->view('layouts/index', $data);

    }

    function filterPro($proSlug){

        $data = $this->Common_model->getDefault();

        $total = $this->Project_model->getTotalProByType($proSlug);
        if(!empty($proSlug)){
            $url = "/";
            $url .= $this->uri->segment(1, 0);
            $pagination = pagination($url, $total, PER_PAGE, 2, 4);
            $offset = $this->uri->segment(2, 0);
        }

        $data['pagination'] = $pagination->create_links();
        $data['isPro'] = true;
        $data['bodycontent'] = "reals/index";
        $data['listReals'] = $this->Project_model->getAllProByType($proSlug, $offset, PER_PAGE);

        $titleTmp = $data['listReals'][0]['category_name']." ".$data['listReals'][0]['pro_name'];

        $data['title'] = (!empty($data['listReals'][0]['pro_seo_title'])) ? $data['listReals'][0]['pro_seo_title'] : $titleTmp;
        $data['keyword'] = (!empty($data['listReals'][0]['pro_seo_keyword'])) ? $data['listReals'][0]['pro_seo_keyword'] : $titleTmp;
        $data['desc'] = (!empty($data['listReals'][0]['pro_seo_desc'])) ? $data['listReals'][0]['pro_seo_desc'] : $titleTmp;

        $this->load->view('layouts/index', $data);
    }

    /**
     * @author Phuc Duong
     * @desc get detail real estate
    **/
    public function detail($idStr) {

        if(ispost()){
            $this->load->model("Contact_model");
            $this->Contact_model->sendEmail();
        }

        $data = $this->Common_model->getDefault();

        $id = getIdFromStr($idStr);
        $data['real'] = $this->Reals_model->getRealById($id);
        $data['bodycontent'] = "reals/detail";
        $data['other'] = $this->Reals_model->getOtherReals($id, $data['real']['project_id']);
        $data['max'] = $this->Reals_model->getMaxReal();

        $data['title'] = (!empty($data['real']['seo_title'])) ? $data['real']['seo_title'] : $data['real']['title'];
        $data['keyword'] = (!empty($data['real']['seo_keyword'])) ? $data['real']['seo_keyword'] : $data['real']['title'];
        $data['desc'] = (!empty($data['real']['seo_desc'])) ? $data['real']['seo_desc'] : $data['real']['title'];

        $this->load->view('layouts/index', $data);
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */