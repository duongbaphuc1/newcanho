<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Common_model extends Abstract_model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->model("Categories_model");
        $this->load->model('District_model');
        $this->load->model('Area_model');
        $this->load->model('Price_model');
        $this->load->model('Configs_model');
    }
    
    function getDefault(){

        $type = '100';
        $data['cats'] = $this->Categories_model->getAll($type);
        $data['catsSearch'] = $this->Categories_model->getCatSearch($type);
        $data['districts'] = $this->District_model->getDistrict(1);
        $data['areas'] = $this->Area_model->getArea();
        $data['prices'] = $this->Price_model->getPrice();
        $data['configs'] = $this->Configs_model->getAll();

        return $data;
    }
}

?>