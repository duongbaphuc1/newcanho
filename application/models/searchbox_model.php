<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Searchbox_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "district";
        $this->_primary_key = "id";
    }

    function setTable($table) {
        $this->_table = $table;
    }

    function getById($id) {
        $this->db->where('id', $id);
        $query = $this->db->get($this->_table, 1);
        return $query->row_array();
    }

    function getAll() {
        $this->db->order_by('sort', 'ASC');
        $query = $this->db->get($this->_table);
        return $query->result();
    }

    function getDataSearchBox($type) {

        $arr = array();
        $data = $this->getAll();
        
        if ($type == 'price') {
            $arr[0] = "Chọn khoãng giá";
        } elseif ($type == 'rent') {
            $arr[0] = "Chọn lọai tin đăng";
        } elseif ($type == 'real') {
            $arr[0] = "Chọn loại địa ốc";
        }

        foreach ($data as $val) {
            if ($type == 'price') {

                $arr[$val->id] = $val->range;
            } elseif ($type == 'rent') {

                $arr[$val->id] = $val->rent_type;
            } elseif ($type == 'real') {

                $arr[$val->id] = $val->name_type;
            }
        }

        return $arr;
    }

}

?>