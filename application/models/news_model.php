<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class News_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "news";
        $this->_primary_key = "id";
    }
    
    function timKiem($keyword) {
        $this->db->like('title', $keyword);
        $result = $this->db->get($this->_table);
        
        if ($result) {
            return $result->result_array();
        }
        return NULL;
    }
    
    function getAll($offset = null, $limit = null, $sort = null){
        if( !empty($offset) && !empty($limit) ){
            $result = $this->fetchAll($this->_table, $offset, $limit, $sort);
        }else{
            $result = $this->fetchAll($this->_table, $offset, $limit, $sort);
        }
        if($result){
            return $result;
        }
        return NULL;
    }
    
    function getNewsById($id){
        if(empty($id)){
            return null;
        }
        $result = $this->fetchOneRow($this->_table, array('id'=>$id));
        return $result;
    } 
    
    function getOtherReals($id){
        return $this->getOtherRow($id, $this->_table);
    }
}

?>