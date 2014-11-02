<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Supports_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "supports";
        $this->_primary_key = "id";        
    }

    function getAll() {        
        return parent::getAll($this->_table);
    }

    function add($data) {        
        return $this->db->insert($this->_table, $data);
    }        

    function delete($id) {
        $user = $this->getById($id);
        $info = $this->session->userdata($this->_table);
        if (!empty($user) && $id != $info['id']) {
            return $this->db->delete($this->_table, array('id' => $id));
        }
        return FALSE;
    }

    function getById($id) {
        $this->db->where('id', $id);
        $query = $this->db->get($this->_table, 1);
        return $query->row_array();
    }

    function edit($data, $id) {        
        return $this->db->update($this->_table, $data, array('id' => $id));
    }   

}
?>
