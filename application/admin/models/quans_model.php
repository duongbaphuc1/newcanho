<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Quans_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "district";
        $this->_primary_key = "id";
    }

    function add($data) {
        return $this->db->insert($this->_table, $data);
    }

    function edit($data, $id) {
        return $this->db->update($this->_table, $data, array('id' => $id));
    }

    function saveSort($data){
        foreach ($data['sort'] as $key=>$val){
            $dataSort['sort'] = $val[0];
            $this->db->update($this->_table, $dataSort, array('id' => $key));
        }
    }
    
    function getById($id) {
        $this->db->where('id', $id);
        $query = $this->db->get($this->_table, 1);
        return $query->row_array();
    }

    function delete($id) {
        return $this->db->delete($this->_table, array('id' => $id));
    }

    function getAll() {
        $this->db->where("province_id", 1);
        $query = $this->db->get($this->_table);
        return $query->result();
    }

}

?>