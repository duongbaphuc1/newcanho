<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Tagreal_model extends CI_Model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        parent::__construct();
        $this->_table = "tags_estate";
        $this->_primary_key = "id";        
    }

    function getAll() {
        $this->db->order_by("id", "DESC");
        $query = $this->db->get($this->_table);
        return $query->result();
    }
    
    function getAllById($col, $id) {
        $this->db->where($col, $id);
        $query = $this->db->get($this->_table);
        return $query->result_array();
    }

    function getById($id) {
        $this->db->where('id', $id);
        $query = $this->db->get($this->_table, 1);
        return $query->row_array();
    }    

    function delete($col,$id) {        
        return $this->db->delete($this->_table, array($col => $id));       
    }   
}
