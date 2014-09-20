<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Renttype_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();        
        $this->_primary_key = "id";
    }

    function setTable($table) {
        $this->_table = $table;
    }

    function add($data) {
        return $this->db->insert($this->_table, $data);
    }

    function edit($data, $id) {
        return $this->db->update($this->_table, $data, array('id' => $id));
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
        $query = $this->db->get($this->_table);
        return $query->result();
    }

}

?>