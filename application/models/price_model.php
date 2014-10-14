<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Price_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "price";
        $this->_primary_key = "id";
    }

    /**
     * @author Phuc Duong
     * @return array
     **/
    function getPrice(){

        $priceVP = array(0=>'Chọn khoảng giá');
        $priceOther = array(0=>'Chọn khoảng giá');

        $this->db->order_by("sort", "asc");
        $query = $this->db->get($this->_table);
        $results = $query->result_array();
        foreach ($results as $item){
            if($item['type'] == 1){
                $priceVP[$item['id']] = $item['price_range'];
            }else{
                $priceOther[$item['id']] = $item['price_range'];
            }
        }
        
        return array('vp' => $priceVP, 'other' => $priceOther);
    }
}

?>