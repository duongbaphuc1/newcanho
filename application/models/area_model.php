<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Area_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "area";
        $this->_primary_key = "id";
    }

    /**
     * @author Phuc Duong
     * @return array
     **/
    function getArea(){

        $areas = array(0=>'Chọn khoảng diện tích');

        $this->db->order_by("sort", "asc");
        $query = $this->db->get($this->_table);
        $results = $query->result_array();
        foreach ($results as $item){
            $areas[$item['id']] = $item['area_range'];
        }
        
        return $areas;
    }
}

?>