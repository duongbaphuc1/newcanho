<?php

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
    
    function getAll($offset, $limit){
         if(!empty($limit) && !empty($offset)){
            $this->db->limit($limit, $offset);
        }
        $result = $this->fetchAll($this->_table);
        if($result){
            return $result;
        }
        return NULL;
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