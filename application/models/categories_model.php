<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Categories_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "categories";
        $this->_primary_key = "id";
    }
    
    function getAll($type){

        $this->db->where('type', $type);
        $result = $this->db->get($this->_table);

        return $result->result_array();
    }
    
    function getCatById($id){
        if(empty($id)){
            return null;
        }
        $result = $this->fetchOneRow($this->_table, array('id'=>$id));
        return $result;
    }
}

?>