<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Advertising_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "advertising";
        $this->_primary_key = "id";
    }
    
    function getAll($type = null, $offset = null, $limit = null){
        if(!empty($limit) && !empty($offset)){
            $this->db->limit($limit, $offset);
        }
        if(!is_null($type)){
            $this->db->where("type", $type);
        }
        $result = $this->fetchAll($this->_table);
        if($result){
            return $result;
        }
        return NULL;
    }            
}

?>