<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Clouds_model extends Abstract_model {

    protected $_table;
    protected $_primary_key;

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->_table = "tag_clouds";
        $this->_primary_key = "id";
    }

    /**
     * @author Phuc Duong
     * @return array
     **/
    function getAll(){
        $this->db->where('is_active', 1);
        $query = $this->db->get($this->_table);
        $results = $query->result_array();
        return $results;
    }
}